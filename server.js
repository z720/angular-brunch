var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	errorHandler = require('errorhandler'),
	morgan = require('morgan'), // logger
	methodOverride = require('method-override');

exports.startServer = function(port, path, callback) {
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true
	}));

	app.use(morgan('tiny'));

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({extended: false}));

	// parse application/json
	app.use(bodyParser.json());

	// Gzip content
	app.use(compress());

	app.use(express.static(path || __dirname + "/public"));

	app.use(methodOverride());

	app.get('/', function(request, response) {
		return response.sendfile('public/index.html');
	});

	return app.listen(port || process.env.PORT || 3333, function() {
		console.log("Listening on port " + (port || process.env.PORT || 3333) + "…");
		callback();
	});
};