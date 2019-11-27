const {google} = require('googleapis');

const axios = require('axios');
const privatekey = require("./GServiceAccountKey.json");

module.exports = {
    getTokens, getJwtClient, filesList, allFilesList, filesList, about, deleteFile
}

function getTokens(jwtClient){
    
    return new Promise((resolve, reject)=>{
        jwtClient.authorize(function (err, tokens) {
          if (err) {
              reject(err);
          } else {
              resolve(tokens.access_token, tokens);
          }
        });
    });
}

function getJwtClient(){
	return new google.auth.JWT(
		privatekey.client_email,
		null,
		privatekey.private_key,
		['https://www.googleapis.com/auth/drive']
	);
}

function filesList(token,params={}){
	return axios({
		method: 'GET',
		url:'https://www.googleapis.com/drive/v3/files',
		headers: { 
				ContentType: 'application/json',
				Authorization: 'Bearer ' + token,
		},
		params
	});
}

function allFilesList(token,params){
	let totalFilesList = (token, params={}, allFiles=[], resolve)=>{
		filesList(token,params).then((res)=>{
			let pageToken = res.data.nextPageToken;

			if(res.data.files && res.data.files.length>0){
				allFiles = [...allFiles, ...res.data.files];
			}
			
			if(pageToken!==undefined){
				console.log(allFiles.length)
				totalFilesList(token,{...params, pageToken},allFiles, resolve)
			}else{
				resolve(allFiles);
			}
		}).catch((err)=>{
			console.log(err.message);
		})
	}

	return new Promise((resolve)=>{
		totalFilesList(token,params, [], resolve);
    })
}

function about(token){
	return axios({
	  method: 'GET',
	  url: 'https://www.googleapis.com/drive/v3/about',
	  headers: { 
		ContentType: 'application/json',
		Authorization: 'Bearer ' + token,
	  },
	  params: {
		fields: 'kind, user, storageQuota, maxImportSizes, maxUploadSize'
	  }
	})
}
  
function deleteFile(token,fileId){
	return axios({
		method: 'DELETE',
		url:`https://www.googleapis.com/drive/v3/files/${fileId}`,
		headers: { 
			Authorization: 'Bearer ' + token,
		}
	});
}
