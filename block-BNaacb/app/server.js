let express = require("express");
let mongoose = require("mongoose");

let app = express();

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/test", (err) => {
	console.log(err ? err : "Connected to Test Database");
});

app.listen(3000, () => {
	console.log("The server is up and running at http://localhost:3000");	
});
