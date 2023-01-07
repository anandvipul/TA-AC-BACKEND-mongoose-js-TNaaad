let express = require("express");
let mongoose = require("mongoose")
let logger = require("morgan");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/test",function (err) {
    console.log(err ? err : "Database Connected");
});


let app = express();


app.use(express.json());
app.use(logger("dev"));


app.get("/", (req, res) => {
    console.log("Index Page");
});



app.listen(3000, () => {
    console.log("Server is up and Running at http://localhost:3000");
});