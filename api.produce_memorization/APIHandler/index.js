const https = require("https");


async function getData(_endpoint, _apiKey){
    const authenticatedEndpoint = _endpoint + "?code=" + _apiKey;
    // add error handling
    return new Promise(resolve => {
        let data = "";
        https.get(authenticatedEndpoint, res => {
            res.on('data', (chunk) =>  (data += chunk));
            res.on('end', () => resolve(data));
        })
    });
}

async function putData(_endpoint, _apiKey, _data){
    const authenticatedEndpoint = _endpoint + "?code=" + _apiKey;
    const dataString = _data;

    const options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        }
    }
    const req = https.request(authenticatedEndpoint, options, (res) => {

        res.on("end", () => {console.log("Put finished")})
    })
    req.write(dataString);
    req.end();

}

/*
{
    command: ""
    data: ""
    client: ""
}

 */


module.exports = async function (context, req) {
    const data = req.body;
    let res = {
        status: "FAILURE",
        data: {}
    };
    if (data.command === "getAvailableCodes"){
        res.data = await getData(process.env.GetPLUCodesEndpoint, process.env.GetPLUCodesKey);
        res.status = "SUCCESS";

    }
    else if (data.command === "getCurrentLeaderboard"){
        res.data = await getData(process.env.GetLeaderboardEndpoint, process.env.GetLeaderboardKey);
        res.status = "SUCCESS";
    }
    else if (data.command === "updateLeaderboard"){
        await putData(process.env.PutLeaderboardEndpoint, process.env.PutLeaderboardKey, JSON.stringify(data.data))
        res.status = "SUCCESS";
    }
    else {
        res.status = "FAILURE";
        res.msg = "Unknown Command";
    }


    context.res = {
        body: res
    };

}