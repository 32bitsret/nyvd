const
  mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String
  },
  qualification: [{ 
    type: String 
  }],
  marital_status: [{ 
    type: String 
  }],
  gender: [{
    type: String
  }],
  disability: [{
    type: String
  }],
  lga: [{
    type: String,
  }],
  time: {
    type: Date,
    default: Date.now
  }
});


const MessageModel = mongoose.model('messages', MessageSchema);
module.exports = MessageModel;