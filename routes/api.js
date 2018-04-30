const routes = require('express');

const app = express();


//POST: add
app.post('/', function(req, res){
	res.send('Hello world POST \n');
});
//GET
app.get('/id', function(req, res){
	res.send('Hello world GET 2 \n');
});
//GGET
//PUT