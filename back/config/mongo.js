const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        const DB_URI = process.env.ATLAS_URI;
        const connection = await mongoose.connect(DB_URI);

        console.log(`*conexión a la db exitosa* ${connection.connection.host}`)
    } catch(error) {
        console.log(error)
        console.log('****conexión a la db errónea****')
    }
}

module.exports = dbConnect;