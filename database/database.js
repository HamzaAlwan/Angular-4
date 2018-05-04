const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Bessi');
const db = mongoose.connection;

db.on('error', function() {
    console.log('mongoose connection error');
});

db.once('open', function() {
    console.log('mongoose connected successfully')
});
