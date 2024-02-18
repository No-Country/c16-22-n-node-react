const moongose = require('mongoose');

const messageModel = moongose.Schema({
  sender: {
    type: moongose.SchemaTypes.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    trim: true,
  },
  chat: {
    type: moongose.SchemaTypes.ObjectId,
    ref: "Chat"
  },
}, {
    timestamps: true
});

const Message = moongose.model("Message", messageModel);

module.exports = Message;