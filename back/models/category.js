const { Schema, model } = require("mongoose");
const { randomUUID } = require('crypto');

const categorySchema = new Schema({
    categoryId: {
        type: 'UUID',
        default: () => randomUUID()
    },
    category: String,
    detail: String,
})

module.exports = model('category', categorySchema);