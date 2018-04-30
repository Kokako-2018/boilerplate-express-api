const express = require('express')

const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token.issue)

function register(req, res, next) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}


router.get('/username', token.decode, (req,res) => {
  res.json({
    username: req.user.username
  })
})

// const {username, password} = req.body
// TODO: make sure username doesn't already exist
// TODO: if not, hash the password and add the user to the database


module.exports = router