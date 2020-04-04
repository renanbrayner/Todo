const express = require('express');

const TodoController = require('./controllers/TodoController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.create);
routes.delete('/todos/:todoId', TodoController.delete);

routes.post('/register', UserController.create);

routes.post('/', SessionController.create);

module.exports = routes;