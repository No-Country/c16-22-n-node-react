const { Schema, model } = require("mongoose");
const { randomUUID } = require('crypto');

const professionalSchema = new Schema(
    {
        professionalId: {
            type: 'UUID',
            default: () => randomUUID()
        },
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
            date: { type: Date, default: Date.now },
            place: String,
        }],
        gallery: [{
            url: String,
        }],
        comments: [{
            user: String,
            body: String,
            date: { type: Date, default: Date.now },
        }],
        contact: {
            type: String,
            unique: true,
        },
        payment: String,
        hidden: Boolean,
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model('professional', professionalSchema)