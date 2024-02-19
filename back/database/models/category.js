const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    category: {
        type: String,
        unique: true,
    },
    detail: String,
},
    {
        timestamps: true,
        versionKey: false,
    }

)

module.exports = model('category', categorySchema);