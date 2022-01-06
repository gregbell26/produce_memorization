const CosmosClient = require("@azure/cosmos").CosmosClient
const endpoint = process.env.CosmosDBEndpoint;
const apiKey = process.env.CosmosAPIKey;

module.exports = async function (context, req) {
    //todo verify request

    const client = new CosmosClient({ endpoint: endpoint, key: apiKey });
    const database = client.database("produce-memorization");
    const leaderBoardContainer = database.container("Leaderboard");

    const getLeaderBoard = "SELECT Leaderboard.leaderboard FROM Leaderboard WHERE Leaderboard.id='top-5'";
    const item = await leaderBoardContainer.items
        .query({query: getLeaderBoard})
        .fetchAll();

    //todo add data checks

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: item.resources[0]
    };
}