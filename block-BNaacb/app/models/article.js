let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
	title: String,
	time: Number
});

