'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.createIfNotExists('users', table => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 254).notNullable()
      table.boolean('active', 60).defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
