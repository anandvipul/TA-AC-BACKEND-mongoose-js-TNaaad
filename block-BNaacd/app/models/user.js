let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = new Schema(
    {
        name: {type: String },
        email: {type: String, lowerCase: true},
        age: {type: Number, default: 0}
    }
);