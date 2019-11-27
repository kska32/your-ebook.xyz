const axios = require("axios");
const {getJwtClient, getTokens, allFilesList} = require("./customGdriveApi");
const fs = require("fs");

module.exports = { getbookFromGdrive };

async function getbookFromGdrive(fileInfo){
    const jwtClient = getJwtClient();
    const token = await getTokens(jwtClient);
    return axios({
            method: 'GET',
            url:`https://www.googleapis.com/drive/v3/files/${fileInfo.gid}`,
            responseType: 'stream',
            params: {
                alt: 'media'
            },
            headers: { 
                Authorization: 'Bearer ' + token
            }
    });
}