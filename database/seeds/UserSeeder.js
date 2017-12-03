'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')
const User = use('App/Models/User')

class UserSeeder {
    async run () {
      var users = await Database.table('users')
      console.log('users before', users)
      await Database.truncate('users')
      /*
      const user = await Factory
        .model('App/Models/User')
        .create()
      */
      const admin = await User.create({
        email: 'admin@isp.com',
        username: 'admin',
        password: 'admin',
        active: true
      });
      users = await Database.table('users')
      console.log('users after', users)
    }
}

module.exports = UserSeeder
