const express = require('express');

const todosRouter = express.Router();

const todos = [
  {
    description: "buy grapes",
    isDone: false
  },
  {
    description: "buy oranges",
    isDone: true
  }
];

todosRouter.get('/todos', getTodos);
function getTodos(_req, res) {
  res
    .status(200)
    .json({ todos });
}

todosRouter.post('/todos', addTodo);
function addTodo(req, res) {
  const newTodo = req.body.todo;

  todos.push(newTodo);

  res
    .status(201)
    .json({ todo: newTodo });
}

module.exports = { todosRouter }
