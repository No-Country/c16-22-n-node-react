const { Schema, model, set } = require("mongoose");
const bcrypt = require("bcryptjs");

set('useUnifiedTopology', true, { timezone: 'UTC-3 (Argentina)' });

const professionalSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: String,
        DNIPasaporte: String,
        telefono: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
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
        queries: [
            {
                userName: String,
                userEmail: String,
                query: String,
                queryDate: Date,
                response: String,
                responseDate: Date,
            }

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
        methods: {
            matchPassword(enteredPassword) {
                return enteredPassword === this.password;
            }
        }
    });

// Before saving to we should perform the encryption
professionalSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt,);
})

module.exports = model('professional', professionalSchema)