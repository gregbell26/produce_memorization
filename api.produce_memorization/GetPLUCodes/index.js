const CosmosClient = require("@azure/cosmos").CosmosClient
const endpoint = process.env.CosmosDBEndpoint;
const apiKey = process.env.CosmosAPIKey;


module.exports = async function (context, req) {
    //todo verify request

    const client = new CosmosClient({ endpoint: endpoint, key: apiKey });
    const database = client.database("produce-memorization");
    const pluCodeContainer = database.container("PLUCodes");

    const getPLUCodes = "SELECT PLUCodes.codes, PLUCodes.codeArrLength FROM PLUCodes WHERE PLUCodes.id='PLUCodes'";
    const item = await pluCodeContainer.items
        .query({query: getPLUCodes})
        .fetchAll();

    //todo add data checks

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: item.resources[0]
    };
}