const { Schema, model } = require("mongoose");

const chatModel = Schema({
  chatName: { type: String, trim: true },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message"
  },
}, {
    timestamps: true
});

const Chat = model("Chat", chatModel);

module.exports = Chat;