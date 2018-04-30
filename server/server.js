const express = require('express')
const passport = require('passport')

const authRoutes = require('./routes/auth')

const server = express()

// Middleware
server.use(passport.initialize())
server.use(express.json())


// Routes
server.use('/api/v1/auth', authRoutes)

module.exports = server
