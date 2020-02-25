const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
    //    required: true
  },
  userName: {
    type: String
    // required: true
  },
  email: {
    type: String
    // required: true
  },
  passWord: {
    type: String
    // required: true
  },
  image: {
    type: String
  },
  articlePosted: {
    type: String
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
