const express = require('express')
const api = require('./api/api.js')

const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/api', api)

app.listen(port)