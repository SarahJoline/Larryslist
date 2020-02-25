const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  discreption: {
    type: String
    //    required: true
  },
  category: {
    type: String
    // required: true
  },
  image: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false
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
