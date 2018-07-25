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
function getTodos(req, res, next) {
  res
    .status(200)
    .json({ todos });
}

module.exports = { todosRouter }
