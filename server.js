'use strict';
// ==== modules ====
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const logger     = require('morgan');
const override   = require('method-override');
const app        = express();
// models
// const ? = require('./routes/?')


// ==== configuration ====
// config files
app.use(express.static(__dirname + '/public'));

// port
const port = process.env.PORT || 3000;

// database
// mongoose.connect('mongodb://localhost:...');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('mongoose connected');
});

// logger
app.use(logger('dev'));

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(override('X-HTTP-Method-Override'));


// ==== routes ====
app.get('/', (req, res) => {
  console.log('Root route hit');
});
// app.use('/', ?);


// ==== server ====
const server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Now on port: ' + port);
});
