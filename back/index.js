const express = require('express');
const cors = require('cors');

app = express();
const PORT = 3001;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the server for the ServiYA')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})