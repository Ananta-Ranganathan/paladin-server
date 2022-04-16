const express = require('express')

const app = express()

const port = process.env.PORT | 3000

const tickers = require('./tickers.json')

app.get('/', (req, res) => {
    res.jsonp(tickers)
})

app.listen(port, () => {
    console.log('hi anata im in your computer lel')
})