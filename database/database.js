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
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

  const roomSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

  const User = mongoose.model('User', userSchema);
  const Room = mongoose.model('Room', roomSchema);