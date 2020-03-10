const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const path = require("path")

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
// const {  User } = require("./models/users.js");
const { isAuth } = require("./middleware/auth.js");

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

const db = require("./models")
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
  // const { email, password } = req.body;
  const email = req.body.email;
  const password = req.body.password;

  console.log(email + " " + password)

  try {
    // 1. Check if the user exist
    // const user = db.User.find(user => user.email === email);
    // if (user) throw new Error("User already exist");
    // 2. If not user exist already, hash the password
    const hashedPassword = await hash(password, 10);
    // 3. Insert the user in "database"
    db.User.create({
      // id: User.length,
      email,
      password: hashedPassword
    });
    res.send({ message: "User Created" });
    console.log(User);
  } catch (err) {
    res.send({
      error: `${err.message}`
    });
  }
});

// log in existing users
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user in array. If not exist send error
    const user = db.User.find(user => user.email === email);
    if (!user) throw new Error("User does not exist");
    // 2. Compare crypted password and see if it checks out. Send error if not
    const valid = await compare(password, user.password);
    if (!valid) throw new Error("Password not correct");
    // 3. Create Refresh- and Accesstoken
    const accesstoken = createAccessToken(user.id);
    const refreshtoken = createRefreshToken(user.id);
    // 4. Store Refreshtoken with user in "db"
    // Could also use different version numbers instead.
    // Then just increase the version number on the revoke endpoint
    user.refreshtoken = refreshtoken;
    // 5. Send token. Refreshtoken as a cookie and accesstoken as a regular response
    sendRefreshToken(res, refreshtoken);
    sendAccessToken(res, req, accesstoken);
  } catch (err) {
    res.send({
      error: `${err.message}`
    });
  }
});



app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
