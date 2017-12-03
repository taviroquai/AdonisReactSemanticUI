'use strict'

const Model = use('Model')

class Todo extends Model {
    static get table () {
        return 'todos'
    }
}

module.exports = Todo
