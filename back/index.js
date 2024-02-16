const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const dbConnect = require('./config/mongo');

const v1Router = require("./v1/routes");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

v1Router(app);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

dbConnect();