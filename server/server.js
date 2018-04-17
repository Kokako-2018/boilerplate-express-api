const path = require('path')
const express = require('express')


const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

// Routes

module.exports = server
