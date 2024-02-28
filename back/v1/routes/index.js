const express = require("express");
const usersRouter = require("./userRoutes");
const categoryRouter = require("./categoryRoutes");
const professionalRouter = require("./professionalRoutes");
const chatRouter = require("./chatRouter");
const messagesRouter = require("./messagesRouter");
const newsRouter = require("./newsRoutes");
const storageRouter = require("./storageRoutes");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/chat', chatRouter)
  router.use('/users', usersRouter);
  router.use('/professional', professionalRouter);
  router.use('/category', categoryRouter);
  router.use('/messages', messagesRouter);
  router.use('/news', newsRouter);
  router.use('/storage', storageRouter);
}

module.exports = routerApi;