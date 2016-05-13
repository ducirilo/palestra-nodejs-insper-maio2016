'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    console.log(req.url);
	
	var queryObject = url.parse(req.url,true).query;
	
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>' + Date() + '</h1>');
	res.write('<p style="color:red; font-size:64px;">Hello World!</p>');
	if (queryObject.name)
		res.write('<p style="color:blue; font-size:32px;">Welcome to Node.js, <b>' + queryObject.name + '</b>!!!</p>');
	
    res.end();
});

server.listen(8080, '127.0.0.1');

console.log('Server listening at http://127.0.0.1:8080');
