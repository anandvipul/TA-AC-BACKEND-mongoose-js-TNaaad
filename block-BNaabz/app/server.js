let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, (err) => {
    console.log(err ? err : "Connected");
});


