var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.get('/music_list', function(req, res) {
	var list = require(__dirname + '/test_list.json');
	res.setHeader('Content-Type', 'application/json;charset=utf-8'); // utf-8 is needed for chinese character
	res.end(JSON.stringify(list));
});

app.get('/music/:music_name', function(req, res) {
	res.set({'Content-Type': 'audio/mpeg'});
	filepath = path.join(__dirname, '/music/' + req.params.music_name);
    var readStream = fs.createReadStream(filepath);
    readStream.pipe(res);
});

app.listen(8080);