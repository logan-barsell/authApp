// main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//App set up
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// server set up

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log('server listening on', port);
