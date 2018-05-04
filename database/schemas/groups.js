const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../database.js');

const groupSchema = new Schema({
    rooms:  [String],
    admin: String,
    groupName:   {type: String, unique: true},
    allowed: [String],
    created_at: {type:Date, default:Date.now}
  });

const Group = mongoose.model('Group', groupSchema);

let saveGroup =  (groupData, callback) => {
  Group.create(groupData, callback);
};

let findGroup = (groupName, callback) => {
  Group.findOne({groupName: groupName}, callback);
};

module.exports.Group = Group;
module.exports.saveGroup = saveGroup;
module.exports.findGroup = findGroup;