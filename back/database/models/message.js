const { Schema, model } = require("mongoose");

const messageModel = Schema(
  {
    sender: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      {
        type: Schema.Types.ObjectId,
        ref: "professional",
      },
    ],
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageModel);

module.exports = Message;