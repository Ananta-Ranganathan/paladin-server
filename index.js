const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

const port = process.env.PORT | 8000

const tickers = require('./tickers.json')

app.get('/', (req, res) => {
    res.json(tickers)
})

app.listen(port, () => {
    console.log('hi anata im in your computer lel')
})