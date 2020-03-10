const mongoose = require("mongoose");
const Comment = require("./comments");
const Post = require("./posts");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  id:{
    type:String,
  },
  firstName: {
    type: String,
    // required: true
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
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // validate: value => {
    // if (!validator.isEmail(value)) {
    //     throw new Error({error: 'Invalid Email address'})
    //     }
    // }
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  image: {
    type: String
  },
  articlePosted: {
    type: String
  },
  // post: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Post"
  //   }
  // ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  tokens: [{
  token:
    {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
