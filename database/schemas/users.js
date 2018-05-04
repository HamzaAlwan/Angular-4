const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../database.js');

const userSchema = new Schema({
    userName:  {type: String, unique: true},
    password: String,
    friends:   [String],
    messages: [{sendTo : String , message: [String]}],
    online: Boolean,
    groups:[String],
    created_at: {type:Date, default:Date.now}
  });

const User = mongoose.model('User', userSchema);

let saveUser =  (userData, callback) => {
  User.create(userData, callback);
};

let findUser = (userName, callback) => {
  User.findOne({userName: userName}, callback);
};

module.exports.User = User;
module.exports.saveUser = saveUser;
module.exports.findUser = findUser;