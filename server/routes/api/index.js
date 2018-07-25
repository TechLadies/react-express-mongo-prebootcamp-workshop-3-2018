const express = require("express");
const { todosRouter } = require("./todos");

const apiRouter = express.Router();

apiRouter.use(todosRouter);

module.exports = { apiRouter };

