const mongoose = require('mongoose');
const { professional } = require('../models');


const dbConnect = () => {
    const DB_URI = process.env.ATLAS_URI;
    mongoose.connect(DB_URI)
        .then(() => console.log('****conexión exitosa****')
        )
        .catch(err => console.log('****conexión errónea****'))
}

module.exports = dbConnect;