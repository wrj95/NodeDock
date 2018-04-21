'use strict';

const express = require('express').Router();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var routes = require('./routes/api');
app.use('/api', routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);