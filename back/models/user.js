const { Schema, model } = require("mongoose");
const { randomUUID } = require('crypto');

const userSchema = new Schema(
    {
        userId: {
            type: 'UUID',
            default: () => randomUUID()
        },
        name: String,
        lastName: String,
        nickname: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        role: {
            type: ["user", "admin"],
            default: "user",
        },
        bookings: [{
            professional: String,
            date: { type: Date, default: Date.now },
            place: String,
        }],
        comments: [{
            professional: String,
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
    },
)

module.exports = model('user', userSchema)