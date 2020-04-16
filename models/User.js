const mongoose = require("mongoose");
// const Post = require("./posts");
// const Comment = require("./comments");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    //    required: true
  },
  username: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true,
    // unique: true,
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
    minLength: 4,
  },
  // image: {
  //   type: String
  // },
  Post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  saved: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};
const User = mongoose.model("User", UserSchema);

module.exports = User;
