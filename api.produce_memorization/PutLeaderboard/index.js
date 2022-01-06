const CosmosClient = require("@azure/cosmos").CosmosClient
const https = require('https')
const endpoint = process.env.CosmosDBEndpoint;
const apiKey = process.env.CosmosAPIKey;

async function getCurrentLeaderboard(_endpoint, _apiKey){
    const authenticatedEndpoint = _endpoint + "?code=" + _apiKey;
    // add error handling
    return new Promise(resolve => {
        let data = "";
        https.get(authenticatedEndpoint, res => {
            res.on('data', (chunk) =>  (data += chunk));
            res.on('end', () => resolve(data));
        })
    })
}


module.exports = async function (context, req) {
    const client = new CosmosClient({ endpoint: endpoint, key: apiKey });
    const database = client.database("produce-memorization");
    const leaderBoardContainer = database.container("Leaderboard");

    const data = req.body.data;
    const curLeaderboard = await getCurrentLeaderboard(process.env.GetLeaderboardEndpoint, process.env.GetLeaderboardKey);
    let leaderboard = JSON.parse(curLeaderboard).leaderboard;

    // We are adding data to the array, then sorting, then chopping the lowest lad off.
    leaderboard.push(data)

    leaderboard.sort((a,b) => {
        return ((a['points'] > b['points']) ? -1 : ((a['points'] < b['points']) ? 1 : 0));
    })

    leaderboard.splice(5);

    await leaderBoardContainer.item("top-5")
        .replace({id: "top-5", "leaderboard": leaderboard});

    context.res = {
        // status: 200, /* Defaults to 200 */
    };
}