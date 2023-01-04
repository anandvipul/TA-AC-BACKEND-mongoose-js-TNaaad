let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", (err) => {
    console.log(err ? err : "Connected");
});


