let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let article = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String},
        tags: [String],
        likes: {type: Number},
        author: {type: [Schema.Types.ObjectId]},
        comments: {type: [Schema.Types.ObjectId]}
    }, {timestamps: true}
);

let comment = new Schema({
    content: {type: String},
    author: {type: Schema.Types.ObjectId},
    article: {type: Schema.Types.ObjectId}
}, {timestamps: true});

let user = new Schema({
    name: {type: String},
    email: {type: String},
    age: {type: Number}
})

let Article = mongoose.model("Article", article);
let Comment = mongoose.model("Comment", comment);
let User = mongoose.model("User", user);

model.exports = {Article, Comment, User};