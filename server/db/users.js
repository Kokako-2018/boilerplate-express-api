const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const hash = require('../auth/hash')

module.exports = {
  userExists,
  createUser,
  getUserByName
}


function createUser (username, password, testDb) {
  const passwordHash = hash.generate(password)
  const db = testDb || connection
  return db('users').insert({username, hash:passwordHash})
}

function userExists (username, testDb) {
  const db = testDb || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, testDb) {
  const db = testDb || connection
  return db('users')
  .select()
  .where('username', username)
  .first()
} 

