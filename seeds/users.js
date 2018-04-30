exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {id: 1, username: 'Ambitious Aardvark', hash: ''},
      
      
    ])
  )
}
