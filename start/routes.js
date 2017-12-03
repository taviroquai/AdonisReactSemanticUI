'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

//Route.post('login', 'UserController.login')
Route.get('login', 'UserController.login').middleware('auth');

Route.get('user', 'UserController.show').middleware('auth');

Route.get('todo', 'TodoController.index');

Route.post('todo', 'TodoController.store');

Route.delete('batch/todo/clear/complete', 'TodoController.clearComplete');

Route.delete('todo/:id', 'TodoController.remove');
