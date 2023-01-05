let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let article = new Schema (
    {
        title: {type: String, required: true, default: "A Beautiful Post"},
        description: {type: String, default: "A beautiful Description"},
        tags: [String],
        createdAt: {type: Date, default: new Date()},
        likes: {type: Number, default: 0}
    }
);

let Article = mongoose.model("Article", article);

module.exports = {Article};