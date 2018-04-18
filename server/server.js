const express = require('express')

const path = require('path')
const users = require('./routes/users')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/users', users)
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
