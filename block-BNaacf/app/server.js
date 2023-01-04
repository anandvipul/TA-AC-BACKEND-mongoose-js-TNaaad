let express = require("express");
let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = new Schema(
    {
        name: String,
        favourites: [String],
        marks: [Number]
    }
);

let address= new Schema({
  village: { type: String },
  city: { type: String },
  state: { type: String },
  pin: { type: Number },
  user: Schema.Types.ObjectId,
});
