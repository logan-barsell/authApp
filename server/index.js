// main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB set up
const connectString = 'mongodb://localhost:27017/auth?authSource=admin';
const options = {
  user: 'myUserAdmin',
  pass: 'R0adrunner'
};

mongoose.connect(connectString, options);

//App set up
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server set up
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log('server listening on', port);
