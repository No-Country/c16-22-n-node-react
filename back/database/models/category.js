const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    category: {
        type: String,
        unique: true,
    },
    urlImage: String,
    detail: String,
},
    {
        timestamps: true,
        versionKey: false,
    }

)

module.exports = model('category', categorySchema);