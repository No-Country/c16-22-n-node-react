const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require("path");
const { Server } = require("socket.io");
// const fileUpload = require("express-fileupload");
const { cloudinaryConfig } = require('./config/cloudinary');
const publicDir = path.resolve(process.cwd(), "public");
console.log('-------local----------')
console.log(process.cwd())
console.log(publicDir)
console.log('-------vercel----------')
console.log(process.env.VERCEL_URL)
// console.log(process.cwd())
console.log('----------------')
const dbConnect = require('./config/mongo');

const v1Router = require("./v1/routes");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app = express();

app.use(express.json());
// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: "./storage"
// }))
// app.use(express.static("storage"));
console.log()
app.use(express.static(publicDir));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: publicDir || process.env.VERCEL_URL });
});

v1Router(app);

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

// io.listen(3002, () => {
//     console.log("Listening WebSocket server on 3002");;
// });

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http:localhost:3001",
  },
});

io.on("connection", (socket) => {
  console.log("User connected to socket.io");
});

dbConnect();
cloudinaryConfig();