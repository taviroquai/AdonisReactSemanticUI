'use strict'

const Schema = use('Schema')

class TodosSchema extends Schema {
  up () {
    this.createIfNotExists('todos', (table) => {
      table.increments()
      table.string('description', 254).notNullable()
      table.boolean('complete').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodosSchema
