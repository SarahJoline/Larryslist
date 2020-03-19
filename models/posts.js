const mongoose = require("mongoose");
const Comment = require("./comments");

const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: {
    type: String
    //required: true
  },
  description: {
    type: String
    //required: true
  },
  category: {
    type: String
    //required: true
  },
  image: {
    type: String
  },
  saved: {
    type: Boolean
    //default: false
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
