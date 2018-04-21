var routes = require("express").Router();

//POST: add
routes.post('/', function(req, res){
	res.send('Hello world POST \n');
});
//GET
routes.get('/id', function(req, res){
	res.send('Hello world GET \n');
});
//GGET
//PUT