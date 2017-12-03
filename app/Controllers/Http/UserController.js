'use strict'

class UserController {

    async login ({ request, auth, response }) {
        try {
          await auth.check()
          response.send({success: true})
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    };

    async show ({ auth, params, response }) {
        try {
          var user = await auth.getUser()
          response.send({success: true, user: user});
        } catch (error) {
          response.send({success: false, error: error.message})
        }
    }
}

module.exports = UserController
