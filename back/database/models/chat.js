const { Schema, model } = require("mongoose");

const chatModel = Schema({
  chatName: { type: String, trim: true },
  user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
  },
  professional: {
      type: Schema.Types.ObjectId,
      ref: "professional",
      required: true
  },
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message"
  },
}, {
    timestamps: true
});

const Chat = model("Chat", chatModel);

module.exports = Chat;