'use strict';
// ==== modules ====
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const logger     = require('morgan');
const override   = require('method-override');
const app        = express();


// ==== configuration ====
// config files
app.use('/', express.static(__dirname + '/public'));

// port
const port = process.env.PORT || 3000;

// database
mongoose.connect('mongodb://localhost:27017/quotes');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('mongoose connected');
});

// logger & parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(override('X-HTTP-Method-Override'));


// ==== access to routes ====
const todoRoutes = require('./routes/todoRoutes');
app.use('/', todoRoutes);
// app.get('*', (req, res) => {
//   console.log('Root route hit');
//   res.sendFile('./public/index.html');
// });


// ==== server ====
const server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Now on port: ' + port);
});
