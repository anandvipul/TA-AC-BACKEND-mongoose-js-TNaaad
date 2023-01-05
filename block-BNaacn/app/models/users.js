let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, lowercase: true},
        age: {type: Number, default: 0, min: 3},
        favourites: [String],
        marks: [Number],
        password: {type: String, minlength: 5, maxlength: 15},
        createdAt: {type: Date, default: new Date()}
    }
);

let User = mongoose.model("User", user);

module.exports = {User};