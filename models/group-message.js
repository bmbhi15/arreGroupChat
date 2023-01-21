const mongoose = require('mongoose');

const GroupMessageSchema = new mongoose.Schema({
  group_id: { type: String, required: true },
  user_id: { type: String, required: true },
  message_text: { type: String, required: true },
  message_time: { type: Date, default: Date.now }
});

const GroupMessage = mongoose.model('GroupMessage', GroupMessageSchema);

module.exports = GroupMessage;

