const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { Server } = require("socket.io");
const fileUpload = require("express-fileupload");
const { cloudinaryConfig } = require('./config/cloudinary');

const dbConnect = require('./config/mongo');

const v1Router = require("./v1/routes");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app = express();

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./storage"  //./uploads
}))
app.use(express.static("storage"));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


v1Router(app);

const io = new Server({
  /* options */
});

io.on("connection", (socket) => {
  console.log("User connected");
});

io.listen(3002, () => {
  console.log("Listening WebSocket server on 3002");;
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

dbConnect();
cloudinaryConfig();