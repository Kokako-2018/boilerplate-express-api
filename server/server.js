const express = require('express')

const path = require('path')

const authRoutes = require('./routes/auth')

const bodyParser = require('body-parser')

const server = express()

// Middleware
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// Routes
server.use('/api/v1/auth', authRoutes)

module.exports = server
