const express = require("express")
const app = express()

const router = require('./router')
app.use(router)

app.use(express.static('public'))
app.set('views','views')
app.set('view engine', 'ejs')

const dotenv = require("dotenv")
dotenv.config()
app.listen(process.env.PORT)

const server = require('http').createServer(app)

module.exports = server