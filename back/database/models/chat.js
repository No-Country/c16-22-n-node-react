const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
  users: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Message"
  },
}, {
    timestamps: true
});

const Chat = moongose.model("Chat", chatModel);

module.exports = Chat;