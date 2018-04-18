const path = require('path')
const express = require('express')

// const posts = require('./routes/posts')
// const comments = require('./routes/comments')

const server = express()
server.use(express.static(path.join(__dirname, '../public')))

// server.use('/v1/posts', posts)
// server.use('/v1/comments', comments)

module.exports = server