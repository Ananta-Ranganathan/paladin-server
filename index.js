const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

const dotenv = require('dotenv')

dotenv.config()

const MongoClient = require('mongodb').MongoClient

const uri = process.env.MONGODB_URI

const port = process.env.PORT || 8000

const tickers = require('./tickers.json')

app.get('/', (req, res) => {
    MongoClient.connect(uri, function(err, db) {
        let stockscores = {}
        if (err) throw err
        var dbo = db.db("scores")
        dbo.collection("tickers").find().toArray(function(err, result) {
            if (err) throw err
            for (i in result) {
                stockscores[result[i]["name"]] = result[i]["scores"]
            }
            res.json(stockscores)
            db.close()
        })
    })
})

app.listen(port, () => {
    console.log('hi anata')
})