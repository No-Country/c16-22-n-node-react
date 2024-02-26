const { Schema, model, set } = require("mongoose");

set('useUnifiedTopology', true, { timezone: 'UTC-3 (Argentina)' });

const storageSchema = new Schema(
    {
        imageId: String,
        imageUrl: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model('storage', storageSchema)