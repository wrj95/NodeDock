'use strict';

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
//const routes = require('/routes/api');

// WHERE WILL RUN THE API
const PORT = 3000;
const HOST = '0.0.0.0';     

// App express and set the port in it
const app = express();
app.set('port', PORT);

//Instance server to API
const server = http.createServer(app);
const router = express.Router();

var route = router.get('/', function(req, res, next){
	res.send('Olá Mundo WRJ \n');
});
app.use('/', route);

server.listen(PORT);
console.log(`Running on http://${HOST}`);