const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const socketIO = require('socket.io')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

 app.use(express.static(__dirname + '/../src'));
 app.use(express.static(__dirname + '/node_modules'));






 
const port = process.env.PORT || 3000;

const server = app
.use((req, res) => res.render('index') )
.listen(port, () => console.log(`Listening on ${ port }`));

const io = socketIO(app)