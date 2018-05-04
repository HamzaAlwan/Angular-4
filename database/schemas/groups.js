const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    rooms:  [String],
    admin: String,
    name:   String,
    allowed: [String]
  });

const Group = mongoose.model('Group', groupSchema);

module.exports.Group = Group;