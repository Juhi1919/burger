// Importing dependencies.

var express = require("express");
var burger = require("../models/burger.js");

// adding route
var router = express.Router();

// GET request reads
// The route created
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var handlebarsObject = {
			burgers: data
		};

		// to make the result on the index.handlebars page
		res.render("index", handlebarsObject);
	});
});

// POST request creates new data for database
router.post("/api/burgers", function(req, res) {
	burger.insertOne([
		"burger_name"
	], [
		req.body.burger_name
	], function(result) {
			res.json({ id: result.insertId });
	});
});


// PUT request updates data.
router.put("/api/burgers/:id", function(req, res) {
	var burgerId = "id = " + req.params.id;

	console.log("Burger status changed for", burgerId);

	burger.updateOne({
		devoured: 1
	}, burgerId, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for use on server.js
module.exports = router;