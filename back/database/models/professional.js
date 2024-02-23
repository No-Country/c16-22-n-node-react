const { Schema, model, set, mongoose } = require("mongoose");

set('useUnifiedTopology', true, { timezone: 'UTC-3 (Argentina)' });

const professionalSchema = new Schema(
    {
        name: String,
        lastName: String,
        company: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        category: String,
        aptitudes: String,
        description: String,
        consultPrice: Number,
        timeAvailability: String,
        geographicAvailability: String,
        bookings: [{
            date: Date,
            place: String,
        }],
        gallery: [{
            imageId: String,
            imageUrl: String,
        }],
        comments: [{
            user: String,
            rating: Number,
            body: String,
            date: Date
        }],
        contact: {
            type: String,
            unique: true,
        },
        payment: String,
        hidden: Boolean
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model('professional', professionalSchema)