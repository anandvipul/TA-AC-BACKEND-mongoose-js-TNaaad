const { application } = require("express");
let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");


const PORT = 3000;


mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/test", (err) => {
    console.log(err ? err : "Connected to Database");
});



let app = express();




app.get("/", (req, res) => {
    res.send("The Home Page");
});




app.listen(PORT, () => {
    console.log(`The server is Up and Running at http://localhost:${PORT}`)
});