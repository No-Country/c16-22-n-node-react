const mongoose = require('mongoose');
// const professionalSchema = require('');


const dbConnect = () => {
    const DB_URI = process.env.ATLAS_URI;
    mongoose.connect(DB_URI)
        .then(() => console.log('****conexión a la db exitosa****')
        )
        .catch(err => console.log('****conexión a la db errónea****'))
}

module.exports = dbConnect;