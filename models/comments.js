const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  comments: {
    type: String,
    default: ''
    //required: true
  },
  userId: {// NEED auth to implement
    type: Schema.Types.ObjectId,
    ref: 'Post'
    // required: true
  },
  post: Schema.Types.ObjectId,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
