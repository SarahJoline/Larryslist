const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const path = require("path");

require("dotenv/config");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken
} = require("./src/tokens.js");
const { User } = require("./models/users.js");
const { isAuth } = require("./middleware/auth.js");

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

const db = require("./models");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb://localhost/larryslist_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

if (process.env.MONGODB_URI === "production") {
  app.use(express.static("client/build"));
}

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  console.log("connected to db instance");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);

const postsRoutes = require("./routes/postsRoutes");
app.use("/api", postsRoutes);

// Register new users
app.post("/register", async (req, res) => {
  const Email = req.body.email;
  const password = req.body.password;
  // hash the password
  const hashedPassword = await hash(password, 10);

  db.User.find().then(user => {
    // check if user exist:
    if (user.email === Email) {
      throw new Error("User already exist");
    } else {
      // if not create new user:
      db.User.create({
        email: req.body.email,
        password: hashedPassword
      })
        .then(user => {
          res.send({ message: "User Created" });

          console.log(user);
        })
        .catch(err => {
          res.send({
            error: `${err.message}`
          });
        });
    }
  });
});

app.get("/allUsers", (req, res) => {
  db.User.find().then(user => {
    res.send(user);
    console.log(user);
  });
});

app.post("/login", async (req, res) => {
  const Email = req.body.email;
  const password = req.body.password;

  db.User.find({ email: Email })
    .then(user => {
      console.log(user);
      // console.log(user[0].password);
      // Find user. If not exist send error
      if (user === null) {
        throw new Error("User does not exist");
      } else if (
        // Compare crypted password and see if it checks out. Send error if not
        password !== user[0].password
      ) {
        console.log(password);
        throw new Error("Password not correct");
      } else {
        // Create Refresh and Accesstoken
        const accesstoken = createAccessToken(user[0]._id);
        const refreshtoken = createRefreshToken(user[0]._id);
        user.refreshtoken = refreshtoken;
        //Send token. Refreshtoken as a cookie and accesstoken as a regular response
        sendRefreshToken(res, refreshtoken);
        sendAccessToken(res, req, accesstoken);
      }
    })
    .catch(err => {
      res.send({
        error: `${err.message}`
      });
    });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
