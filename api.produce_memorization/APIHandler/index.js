const https = require("https");


async function getDate(_endpoint, _apiKey){
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

async


module.exports = async function (context, req) {
    const data = req.body.data;

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

}