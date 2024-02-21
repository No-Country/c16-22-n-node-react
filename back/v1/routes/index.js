const express = require("express");
const usersRouter = require("./userRoutes");
const categoryRouter = require("./categoryRoutes");
const professionalRouter = require("./professionalRoutes");
const chatRouter = require("./chatRouter");
const messagesRouter = require("./messagesRouter")

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/chat', chatRouter)
    router.use('/users', usersRouter);
    router.use('/professional', professionalRouter);
    router.use('/category', categoryRouter);
    router.use('/messages', messagesRouter)

    router.route("/").get((req, res) => {
      res.send(`<h2>Hello from ${req.baseUrl}</h2>
        <h2>Welcome to the server for ServiYA</h2>
    `);
    });
}

module.exports = routerApi;