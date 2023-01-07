// importing modules

let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");

let User = require("./models/user");

// Constants
let PORT = 3000;

// db connection

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/test", (error) => {
  console.log(error ? error : "Database Connection Successful");
});

// Express Application
let app = express();

// Middleswares
app.use(logger("dev"));
app.use(express.json());

// Middlewares [Routes]


// Get Requests
app.get("/", (req, res, next) => {
  res.send("This is the index page");
});


app.get("/users/name/:username", (req, res, next) => {
	let username = req.params.username;
	User.find({"name": `${username}`}, (err, data) => {
		res.json(data);
		console.log(err ? err : data);
	});
	
});

app.get("/users/one/:id", (req, res, next) => {
	let id = req.params.id;
	User.findOne({_id: id}, (err, data) => {
		res.json(data);
	});
});

app.get("/users/id/:id", (req, res) => {
	let id = req.params.id;
	console.log(id);
	User.findById(id, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			
			res.json(data);
		}
	});
});



// Post Requests

app.post("/users", (req, res) => {
	// console.log(req.body);
	User.create(req.body, (err, data) => {
		// console.log(err, data);
		res.sendStatus(200);
	});
});


// Put Requests

app.put("/users/update/:uname", (req, res, next) => {
	let uname = req.params.uname;
	User.update({name: uname}, req.body, {new: true}, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(data);
		}
	});
});

app.put("/users/update/id/:id", (req, res, next) => {
	let id = req.params.id;
	User.findByIdAndUpdate(id, req.body, {new: true}, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(req.body);
		}
	})
});

app.delete("/users/update/id/:id", (req, res, next) => {
	let id = req.params.id;
	User.findByIdAndDelete(id, (err, data) => {
		if (err) {
			next(err);
		} else {
			res.json(req.body);
		}
	})
});

// 404 Middleware

app.use((req, res, next) => {
  res.send("404 Resource was not found");
});



// Error Middleware
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  } else {
    console.log("");
  }
});

// Listening on PORT
app.listen(PORT, () => {
  console.log("The Server is Up and Running at http://localhost:3000");
});
