let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", (err) => {
    console.log(err ? err : "Connected");


});

let app = express();

app.listen(3000, () => {
    console.log("The Server is up and runnign at http://localhost:3000");
});