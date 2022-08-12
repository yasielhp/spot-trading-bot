const Binance = require('node-binance-api')
const client = new Binance().options({
    APIKEY: process.env.BINANCE_API_KEY,
    APISECRET: process.env.BINANCE_API_SECRET,
})

module.exports = client