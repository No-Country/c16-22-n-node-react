const { Schema, model, set } = require("mongoose");

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
        validations: String,
        description: String,
        pricePerHour: String,
        timeAvailability: String,
        geographicAvailability: String,
        bookings: [{
            date: Date,
            place: String,
        }],
        gallery: [{
            url: String,
        }],
        comments: [{
            user: String,
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