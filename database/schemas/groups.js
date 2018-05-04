const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../database.js');

const groupSchema = new Schema({
    rooms:  [String],
    admin: String,
    name:   {type: String, unique: true},
    allowed: [String]
  });

const Group = mongoose.model('Group', groupSchema);

let saveGroup = function (data, callback){
  let group = Group(data);
    group.save();
}

module.exports.Group = Group;
module.exports.saveGroup = saveGroup;