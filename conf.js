
const mongodbUrl = `mongodb://${process.env.DB_IP || 'localhost'}:27017`;
const submitKey = "1900329";

const svrIp = `${process.env.SERVER_IP || '0.0.0.0'}`;
const svrPort = `${process.env.SERVER_PORT || '3002'}`;

module.exports = {
    mongodbUrl,
    submitKey,
    svrIp,
    svrPort
}