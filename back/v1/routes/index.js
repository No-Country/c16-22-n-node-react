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
    // cambiar este html por un objeto JSON con toda la información
    res.send(`<h2>Hello from ${req.baseUrl}</h2>
        <h2>Welcome to the server for ServiYA</h2>
        <h3>Routes for /api/v1/</h3>
        <p>/api/v1/chat</p>
        <p>/api/v1/users</p>
        <p>/api/v1/professional</p>
        <p>/api/v1/category</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        `
    );
  });
}

module.exports = routerApi;