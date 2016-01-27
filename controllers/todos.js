'use strict';
const Todo = require('../models/Todo');

// get all todos
function getTodos(req, res) {
  Todo.find((err, todos) => {
    if (err) {
      console.log('Todos not found: ' + err);
    };
    res.json(todos);
  });
}

// post a todo and get all todos
function createTodo(req, res) {
  let newTodo = new Todo(req.body);
  newTodo.save((err) => {
    if (err) {
      console.log('Unable to create a todo: ' + err);
    };
    // get all todos
    Todo.find((err, todos) => {
      if (err) {
        console.log('Todos not found: ' + err);
      };
      res.json(todos);
    });
  });
}

// delete a todo and get all todos
function removeTodo(req, res) {
  let id = req.params.id;
  Todo.remove({_id: id}, (err) => {
    if (err) {
      console.log('Unable to remove todo: ' + err);
    }
    res.send('Todo successfully deleted');
  });
  // get all todos
  Todo.find((err, todos) => {
    if (err) {
      console.log('Todos not found: ' + err);
    };
    res.json(todos);
  });
}



// ==== export module ====
module.exports = {
  getTodos: getTodos,
  createTodo: createTodo,
  removeTodo: removeTodo
}
