const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const path = require('path');
const socketIO = require('socket.io');
const User = require('../database/schemas/users.js');
const Group = require('../database/schemas/groups.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../dist/my-app')));
app.use(express.static(__dirname + '../node_modules'));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../dist/my-app/index.html'));
});

app.post('/saveUser', (req, res) => {
    User.saveUser(req.body, function(err, data){
        if (err) {
            console.log("Name Already used");
        } else {
            res.send("User Created");
        }
    });
});

app.post('/findUser', (req, res) => {
    User.findUser(req.body.userName, function(err, user){
        if (err) {
           res.send(err);
        } else {
            res.send(user);
        }
    });
});

app.post('/saveGroup', (req, res) => {
    Group.saveGroup(req.body, function(err, data){
        if (err) {
            console.log("Name Already used");
        } else {
            res.send("Group Created");
        }
    });
});

app.post('/findGroup', (req, res) => {
    Group.findGroup(req.body.groupName, function(err, group){
        if (err) {
           res.send(err);
        } else {
            res.send(group);
        }
    });
});

const port = process.env.PORT || 3000;

const server = app
.use((req, res) => res.render('index'))
.listen(port, () => console.log(`Listening on ${ port }`));

// const io = socketIO(app)

