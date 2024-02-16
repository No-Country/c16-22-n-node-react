const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const dbConnect = require('./config/mongo');

app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the server for the ServiYA')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

dbConnect();