const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  userId: {// NEED auth to implement
    type: String
    // required: true
  },
  post: Schema.Types.ObjectId,

});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
