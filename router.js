const express = require('express')
const visitor = require('./models/Page')
const router = express.Router()

router.get('/', function(req, res){res.render('homepage')})

module.exports = router