'use strict'

/*
|--------------------------------------------------------------------------
| todoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const Todo = use('App/Models/Todo')

class TodoSeeder {
    async run () {
      var todos = await Database.table('todos')
      console.log('todos before', todos)
      await Database.truncate('todos')
      const todo = await Factory
        .model('App/Models/Todo')
        .create()
      todos = await Database.table('todos')
      console.log('todos after', todos)
    }
}

module.exports = TodoSeeder
