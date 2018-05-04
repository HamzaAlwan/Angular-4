const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../database.js');

const userSchema = new Schema({
    name:  {type: String, unique: true},
    password: String,
    friends:   [String],
    messages: [{to : String , message: [String]}],
    online: Boolean,
    groups:[String]
  });

const User = mongoose.model('User', userSchema);

let saveUser = function (data, callback){
  let user = User(data);
    user.save();
}

module.exports.User = User;
module.exports.saveUser = saveUser;