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
    // MongoClient.connect(uri, function(err, db) {
    //     if (err) throw err
    //     var dbo = db.db("scores")
    //     dbo.collection("tickers").find({"name":"GOOGL"}).toArray(function(err, result) {
    //         if (err) throw err
    //         console.log(result)
    //         db.close()
    //     })
    // })
    res.json(tickers)
})

app.listen(port, () => {

})