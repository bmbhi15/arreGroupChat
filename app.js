const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const GroupMessage = require('./models/group-message');
const groupMessageController = require('./controllers/group-message-controller');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/whatsapp-group-chat', { useNewUrlParser: true });

app.use(bodyParser.json());

// Define the routes
app.get('/messages/:group_id', groupMessageController.getGroupMessages);
app.post('/message', groupMessageController.createGroupMessage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
