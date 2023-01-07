let mongoose = require("mongoose");

let Scheme = mongoose.Schema;

let user = new Scheme( {
    name: {type: String, required: true},
    email: {type: String},
    sports: {type: [String]}
});

let User = mongoose.model("User", user);
module.exports = User;