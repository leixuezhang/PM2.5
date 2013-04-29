var express = require('express');

function start(route, handle){
	var app = express();

	app.get('/' , function(req, res){
		route(handle, '/start', res);
	});

	app.get('/map', function(req, res){
		route(handle, '/start', res);
	});

	app.get('/cities', function(req, res){
		route(handle, '/cities', res);
	});

	app.get('/allcities', function(req, res){
		route(handle, '/allcities', res);
	});

	app.get('/parse', function(req, res){
		route(handle, '/parseCityData', res);
	});

	app.use(express.static('./css'));
	app.use(express.static('./js'));
	app.use(express.static('./img'));
	app.use(express.static('./html'));

	app.listen(3000);
	console.log('Listening on port 3000');
}

exports.start = start;	