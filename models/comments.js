const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  userId: {
    type: String
    // required: true
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
