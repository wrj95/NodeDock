'use strict';

const http = require('http');
const app = require('./routes/api');

// WHERE WILL RUN THE API
const PORT = 3000;
const HOST = '0.0.0.0';     

// App express and set the port in it
app.set('port', PORT);

//Instance server to API
const server = http.createServer(app);
server.listen(PORT);
console.log(`Running on http://${HOST}`);   