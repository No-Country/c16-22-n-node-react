const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: String,
    nickname: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
    bookings: [
      {
        professional: String,
        date: { type: Date, default: Date.now },
        place: String,
      },
    ],
    comments: [
      {
        professional: String,
        body: String,
        date: { type: Date, default: Date.now },
      },
    ],
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.matchPassword = async (enteredPassword) => {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Before saving we should perform the encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified) {
    next()
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt,);
})

module.exports = model('user', userSchema)