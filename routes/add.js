var data = require('../data.json');

exports.addFriend = function(req, res) {  
	var name = req.query.name;
	var description = req.query.description;

	// var newFriend = new Object();
	// newFriend.name = name;
	// newFriend.description = description;
	// newFriend.imageURL = "http://lorempixel.com/images/400/400/people";
	var newFriend = {
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/images/400/400/people"			
	};

	console.log(newFriend);
	data["friends"].push(newFriend);

	res.render('add', newFriend);

 }