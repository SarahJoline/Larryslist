const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/project_test1";

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  },
  () => {
    console.log("successfully connect to db");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const userRouter = require("./routes/User");
app.use("/", userRouter);

const postsRoutes = require("./routes/postsRoutes");
app.use("/api", postsRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
