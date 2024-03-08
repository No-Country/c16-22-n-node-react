const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require("path");
const { Server } = require("socket.io");
const fileUpload = require("express-fileupload");
const { cloudinaryConfig } = require('./config/cloudinary');
//esta variable no se usa en local, 
// sólo lo utiliza vercel para encontrar la carpeta pública al parecer!!!
const publicDirVercel = path.resolve(__dirname, "public");

const dbConnect = require('./config/mongo');

const v1Router = require("./v1/routes");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app = express();

app.use(express.json());
app.use(fileUpload({
  // limits: { fileSize: 1 * 1024 * 1024 }, // Limit to 1MB
  // useTempFiles: true,
  // tempFileDir: "public"
}))
console.log()
app.use(express.static('./back/public'));

// Enable CORS for all routes
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://serviya-front.vercel.app",
    "http://localhost:5173",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var corsOptions = {
  origin: ["https://serviya-front.vercel.app", "http://localhost:5173"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: './public' });
});

v1Router(app);

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

// io.listen(3002, () => {
//     console.log("Listening WebSocket server on 3002");;
// });

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  },
});

io.on("connection", (socket) => {
  console.log("User connected to socket.io");

  socket.on("setup", (userId) => {
    socket.join(userId);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log(`User joined room ${room} `)
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    let chat = newMessageReceived.chat;
    console.log("message received")
    if (!chat.users) return console.log("chat.users not defined");

    // We will not send message to ourselves
    chat.users.forEach(user => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });

  });

  socket.off("setup", () => {
    console.log("user has DISCONNECTED");
    socket.leave(userId)
  })
});

dbConnect();
cloudinaryConfig();