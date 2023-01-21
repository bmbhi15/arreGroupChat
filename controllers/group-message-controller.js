const GroupMessage = require('../models/group-message');

exports.getGroupMessages = (req, res) => {
  const group_id = req.params.group_id;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  GroupMessage.find({ group_id: group_id })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ message_time: -1 })
    .exec((err, messages) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(messages);
      }
    });
};

exports.createGroupMessage = (req, res) => {
  const group_id = req.body.group_id;
  const user_id = req.body.user_id;
  const message_text = req.body.message_text;

  const groupMessage = new GroupMessage({ group_id, user_id, message_text });

  groupMessage.save((err, message) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(message);
    }
  });
};
