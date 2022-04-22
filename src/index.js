require('dotenv').config()
const express = require('express')
const route = require('./routes/index')
const connectDataBase = require('./config/db/index')
const bodyParser = require('body-parser')
const app = express()
const port = 8080;
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))



route(app)
connectDataBase()

app.listen(process.env.PORT || port, () => {
    console.log(`http://localhost:${process.env.PORT || port}/`)
})