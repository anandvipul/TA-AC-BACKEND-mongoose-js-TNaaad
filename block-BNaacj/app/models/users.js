let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = new Schema(
    {
        name: {type: String, required: true},
        password: {type: String, minlength: 5, maxlength: 15},
        createdAt: {type: Date, default: Date()}
    }
);