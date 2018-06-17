'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Extension to convert the answer on JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

//CRUD

//GET
const route = router.get('/', function(req, res, next){
	res.send('Olá Mundo WRJ API OTHER PATH \n');
});


//POST
const create = router.post('/', function(req, res, next){
	//Answer will be on format JSON
	res.status(201).send(req.body);
});


//Routes way
app.use('/', route);
app.use('/produto', create);

//Export the app
module.exports = app;