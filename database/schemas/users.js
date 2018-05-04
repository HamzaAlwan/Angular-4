const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:  String,
    password: String,
    friends:   [String],
    messages: [{to : String , message: [String]}],
    online: Boolean,
    groups:[String]
  });

const User = mongoose.model('User', userSchema);


module.exports.User = User;