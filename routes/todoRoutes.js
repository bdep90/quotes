'use strict';
const express     = require('express');
const router      = express.Router();
const bodyParser  = require('body-parser');
const override    = require('method-override');

const todosController = require('../controllers/todos');

// ==== routes ====
router.route('/quotes')
  // get all todos
  .get(todosController.getTodos)
  // post a todo
  .post(todosController.createTodo);

router.route('/quotes/:id')
  // delete a todo
  .delete(todosController.removeTodo);


// ==== export module ====
module.exports = router
