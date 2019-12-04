const crypto = require('crypto');
const svgCaptcha = require('svg-captcha');
const defaultSecret = '1900329,1900329.';

function aes256Encrypt(text, secret=defaultSecret) {
    let iv = crypto.randomBytes(16);
    let key = crypto.createHash('sha256')
                .update(String(secret))
                .digest('base64')
                .slice(0,32);

    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text);

        encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + encrypted.toString('hex');
}

function aes256Decrypt(text, secret=defaultSecret) {
    let iv = Buffer.from(text.slice(0,32), 'hex');
    let encryptedText = Buffer.from(text.slice(32), 'hex');
    let key = crypto.createHash('sha256')
                .update(String(secret))
                .digest('base64')
                .slice(0,32);
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText);

        decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function sha256Hmac(text, secret=defaultSecret){
    const hmac = crypto.createHmac("sha256",secret);
          hmac.update(text);
    return hmac.digest('hex');
}

function randomize(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCaptchaToken(otid='', secret=defaultSecret, expiration=1000*60*3){
    //return captchaToken
    let captcha = svgCaptcha.create({
        size: randomize(4,6),
        noise: randomize(1,5),
        color: true
    });

    let token = {
        data: captcha.data,
        expi: Date.now() + expiration,
        otid: otid,
        sign: aes256Encrypt(captcha.text),
        text: '' //user inputted Text
    }
    token.sign += sha256Hmac(token.data + '' + token.expi + '' + token.otid + '' + token.sign);
    
    return token;
}

function verifyCaptchaToken(captchaToken, secret=defaultSecret){
    return {
        get Integrity(){
            try {
                let token = captchaToken;
                let encText = token.sign.slice(0,64);
                let vSign = encText + '' + sha256Hmac(token.data + '' + token.expi + '' + token.otid + '' + encText, secret);
                return captchaToken.sign === vSign;
            }catch(err){
                return false;
            }
        },
        get CaptchaText(){
            try{
                let encText = captchaToken.sign.slice(0,64);
                return aes256Decrypt(encText);
            }catch(err){
                return false;
            }
        },
        get CaptchaTextLegality(){
            try{
                return (this.CaptchaText!==false) & (this.CaptchaText === captchaToken.text);
            }catch(err){
                return false;
            }
        },
        get CaptchaExpi(){
            let {expi} = captchaToken;
            return expi;
        },
        get CaptchaExpiLegality(){
            try{
                return Date.now() <= this.CaptchaExpi;
            }catch(err){
                return false;
            }
        },
        get result(){
            try{
                let TI = this.Integrity ? 0b100 : 0b000 ;
                let TE = this.CaptchaExpiLegality ? 0b10 : 0b00;
                let TT = this.CaptchaTextLegality ? 0b1 : 0b0;
                return parseInt(TI | TE | TT).toString(2);
            }catch(err){
                return false;
            }
        }
    }
}

module.exports = { 
    aes256Decrypt, 
    aes256Encrypt, 
    sha256Hmac,
    createCaptchaToken,
    verifyCaptchaToken
}; 