const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const logger = require("morgan");
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb://localhost/larryslist_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

if (process.env.MONGO_URI === "production") {
  app.use(express.static("client/build"));
}

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  console.log("connected to db instance");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// const apiRoutes = require("");
// app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
