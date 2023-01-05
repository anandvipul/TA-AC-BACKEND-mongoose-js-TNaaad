let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let address = new Schema(
    {
        village: {type: String},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pin: {type: Number},
        user: {type: Schema.Types.ObjectId}
    }, {timestamps: true}
);

let Address = mongoose.model("Address", address);
module.exports = {Address};