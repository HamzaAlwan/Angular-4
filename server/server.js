const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const path = require('path');
const socketIO = require('socket.io');
const Users = require('../database/schemas/users.js');
const Groups = require('../database/schemas/groups.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../dist/my-app')));
app.use(express.static(__dirname + '../node_modules'));

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname, '../dist/my-app/index.html'))
});

const port = process.env.PORT || 3000;

const server = app
.use((req, res) => res.render('index'))
.listen(port, () => console.log(`Listening on ${ port }`));

// const io = socketIO(app)

