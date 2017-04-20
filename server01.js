// Mongoose/Express example obtaining information from a
// web page and communicating with a database using $.getJSON().

(function() {
	"use strict";

	var main = function() {
		var express = require("express"),
				bodyParser = require("body-parser"),
				mongoose = require("mongoose"),
				app = express();
		mongoose.Promise = global.Promise;
		
		app.use(express.static(__dirname));
		app.use(bodyParser.urlencoded({ extended: true }));
		
		mongoose.connect("mongodb://localhost/app");
		
		var ItemSchema = mongoose.Schema({
			"firstName" : String,
			"lastName" : String,
			"affil" : Number});
		
		var Person = mongoose.model("Person", PersonSchema); 
		
		// The field used here for getJSON() is req.query
		//app.get("/getPerson", function(req, res) {
//			Person.find(req.query, function(err, item) {
//				if (err) res.send("ERROR");
//				else res.send(item);
//			});
//		});
		
		app.post("/putPerson", function(req, res) {
			var newPerson = new Person({"firstName" : req.body.firstName,
									 						"lastName" : req.body.lastName,
									 						"affil" : req.body.affil});
			newPerson.save(function(err, result) {
				if (err) {
					console.log(err);
					res.send("ERROR");
				} 
				else res.send("UPDATED");	
			});
		});
		
		app.listen(3000);
		console.log("listening on port 3000");
		
	};
	
	main();
	
}());
	