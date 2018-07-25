const express = require('express');
const { Todo } = require('../../models/Todo');

const todosRouter = express.Router();

// const todos = [
//   {
//     description: "buy grapes",
//     isDone: false
//   },
//   {
//     description: "buy oranges",
//     isDone: true
//   }
// ];

todosRouter.get('/todos', getTodos);
async function getTodos(_req, res) {
  const todos = await Todo.find({}) ;
  res
    .status(200)
    .json({ todos });
}

todosRouter.post('/todos', addTodo);
async function addTodo(req, res) {
  const { description, isDone } = req.body.todo;

  // todos.push(newTodo);

  const todo = new Todo({
    description,
    isDone,
  });
  await todo.save();

  res
    .status(201)
    .json({ todo });
}

module.exports = { todosRouter }
