// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flickr = require("flickrapi");
const fs = require("fs");
const async = require("async");

const app = express();

// Assumes that there are two files containing the keys
// $PROJECT_HOME/server/api_key.txt
// $PROJECT_HOME/server/api_secret.txt
function getApiKeys(callback, errorcallback) {
	fs.readFile(path.resolve(__dirname,"./api_key.txt"), "utf-8", (err, api_key) => {
		if (err) {
			errorcallback(err);
			return;
		}
		fs.readFile(path.resolve(__dirname,"./api_secret.txt"), "utf-8",(err, api_secret) => {
			if (err) {
				errorcallback(err);
				return;
			}
			callback(api_key.trim(), api_secret.trim());
		});
	});
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Searches Flickr for a specific query
app.get('/flickr/:query', function (req, res) {
	console.log("Flickr call query=" + req.params['query'] );
	getApiKeys((api_key, api_secret) => {
		const Flickr = require("flickrapi"),
	    flickrOptions = {
	      api_key: api_key,
	      secret: api_secret
	    };
	    console.log(api_key);
	    console.log(api_secret);
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			console.log("tokenOnly");
			if (error) {
				console.log("error en el token");
				console.log(error);
				res.send(error);
				return;
			}
			base_text = req.params["query"];

			color_list = ["red" , "orange", "yellow", "green" , "blue", "indigo", "violet"]
			numbers = [0, 1, 2, 3, 4, 5, 6]
			var result_list = []
			var onComplete = function() {
				console.log("Todos los ciclos han corrido:")
				console.log(result_list);
				res.send(result_list);
			};
			console.log("entra al ciclo");

			async.each(
				numbers,
				(index, callback) => {
					search_params = {
						safe:1,
						sort:"relevance",
						per_page: 7
					}
					search_params["text"] = base_text + " " + color_list[index];
					flickr.photos.search(search_params, (err, data) => {
						console.log("Inicia la búsqueda con índice " + index)

				  	if (err) {
							console.log("ERROR en el lado del servidor:");
							console.log(err);
							res.send(err);
							return;
						}
				  	console.log("Got flickr data sending it:");
						console.log(data.photos.photo);
						result_list[index] = data.photos.photo;
						callback();
				  });
				},
				function(err){
					onComplete();
				}
			);

		  // we can now use "flickr" as our API object,
		  // but we can only call public methods and access public data




		});

	}, (err) => {
		console.log(err);
		res.send("Error!");
	})
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;
