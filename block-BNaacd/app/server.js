let express = require("express");
let mongoose = require("mongoose");

let app = express();

// mongoose.sit
mongoose.connect("mongodb://localhost:27017/test", (err) => {
    console.log(err ? err : "Database Connected");
})

app.get("/", (req, res) => {
    res.send("Hello for index.html");
});

app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000")
});