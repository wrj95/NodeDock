'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('get 1 \n');
});

//const routes = require('/routes/api');
app.get('/api', (req, res) =>{
	res.send('get 2');
});

app.post('/api/post', (req, res) =>{
	res.send('POST 1');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);