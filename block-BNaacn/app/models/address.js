let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let address = new Schema(
    {
        village: {type: String},
        city: {type: String},
        state: {type: String},
        pin: {type: Number},
        user: {type: Schema.Types.ObjectId}
    }
);

let Address = mongoose.model("Address", address);
module.exports = {Address};