const https = require('https');

async function verifyReCaptcha(req){//'g-recaptcha-response'
    function httpsRequest(hostname,path,method="POST",port=443){
            const options = {
                hostname: hostname,
                port: 443,
                path: path,
                method: 'POST'
            };
            return new Promise(function(resolve){
                const req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (d) => {
                        //process.stdout.write(d);
                        data += d;
                    });
                    res.on('end', (d) => {
                        resolve(data);
                    });
                });
                req.on('error', (e) => { console.error(e); });
                req.end();
            });
    }

    const secret = "6LdixEAUAAAAAApkmnb0Xu_a8vLFuC7ESaT2YVVq";
	let gresreq = req.body['g-recaptcha-response'];
	let hostname = "www.google.com";
	let path = "/recaptcha/api/siteverify?secret="+secret+"&response="+gresreq;
	let r = await httpsRequest(hostname, path);
	let obj = JSON.parse(r);
	return obj.success;
}




module.exports = { verifyReCaptcha };