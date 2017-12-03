'use strict'

const Todo = use('App/Models/Todo')

class TodoController {

    /**
     * Todos index
     * @param  {Object}  request  [description]
     * @param  {Object}  response [description]
     * @return {Promise}          [description]
     */
    async index ({request, response}) {
        try {
            const todos = await Todo.all()
            response.send({success: true, items: todos});
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    }

    /**
     * Todo store
     * @param  {Object}  request  [description]
     * @param  {Object}  response [description]
     * @return {Promise}          [description]
     */
    async store ({request, response}) {
        try {
            const post = request.post()
            var todo = await Todo.find(post.id)
            if (todo) {
                todo.merge({description: post.description, complete: post.complete})
                await todo.save()
            } else {
                todo = await Todo.create(post)
            }
            response.send({success: true, todo: todo});
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    }

    /**
     * Todo remove item
     * @param  {Object}  request  [description]
     * @param  {Object}  params   [description]
     * @param  {Object}  response [description]
     * @return {Promise}          [description]
     */
    async remove ({request, params, response}) {
        try {
            const todo = await Todo.find(params.id)
            await todo.delete()
            response.send({success: true});
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    }

    /**
     * Todo clear bulk
     * @param  {Object}  request  [description]
     * @param  {Object}  response [description]
     * @return {Promise}          [description]
     */
    async clearComplete ({request, response}) {
        try {
            await Todo.query().where('complete', true).delete()
            response.send({success: true});
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    }
}

module.exports = TodoController
