const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Bessi');
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', function() {
    console.log('mongoose connection error');
});

db.once('open', function() {
    console.log('mongoose connected successfully')
});

const userSchema = new Schema({
    name:  String,
    password: String,
    friends:   [String],
    messages: [{to : String , message: [String]}],
    online: Boolean,
    groups:[String]
  });

  const groupSchema = new Schema({
    rooms:  [String],
    admin: String,
    name:   String,
    allowed: [String]
  });

  const User = mongoose.model('User', userSchema);
  const Group = mongoose.model('Group', groupSchema);