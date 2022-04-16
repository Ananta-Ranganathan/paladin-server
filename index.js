const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())

const { spawn } = require('child_process')

const port = process.env.PORT || 8000

const tickers = require('./tickers.json')

app.get('/', (req, res) => {
    let args = []
    const python = spawn('python', ['script.py', `${args}`])
    python.stdout.on('data', (data) => {
        console.log(`${data}`)
    })
    python.stderr.on('data', (data) => {
        console.log(`${data}`)
    })
    python.on('exit', (code) => {
        console.log(`child process exited with code ${code}`)
    })
    res.json(tickers)
})

app.listen(port, () => {

})