const { Schema, model, set } = require("mongoose");

set('useUnifiedTopology', true, { timezone: 'UTC-3 (Argentina)' });

const professionalSchema = new Schema(
    {
        name: String,
        lastName: String,
        DNIPasaporte: String,
        telefono: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        category: String,
        license: String,
        gender: {
            type: ["masculino", "femenino"],
            default: "masculino"
        },
        workZone: String,
        aptitudes: [String],
        timeAvailability: String,
        description: String,
        consultPrice: Number,
        bookings: [{
            date: Date,
            place: String,
        }],
        gallery: [{
            imageId: String,
            imageUrl: String,
        }],
        consult: [
            {
                userName: String,
                userEmail: String,
            },
            [{
                consult: String,
                date: Date,
            }],
            [
                {
                    response: String,
                    date: Date,
                }
            ]

        ],
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
        hidden: Boolean,
        pic: {
            type: String,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        picId: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model('professional', professionalSchema)