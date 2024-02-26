const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
    news: [String],
    urlImage: String,
},
    {
        timestamps: true,
        versionKey: false,
    }

)

module.exports = model('news', newsSchema);