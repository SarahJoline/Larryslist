const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/Posts");

const Post = require("../models/Posts");

router.post("/newPost", (req, res) => {
  console.log("GOT IT");
  Post.create({
    category: req.body.category || "",
    title: req.body.title,
    description: req.body.description,
    image: req.body.image || "",
    userId: req.body.userId,
    //UserId: req.body.UserId || ""
  })
    .then((newPosts) => {
      res.send(newPosts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/allPosts", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/find/:id", (req, res) => {
  Post.find({
    _id: req.params.id,
  }).then((searchedPost) => {
    res.json(searchedPost);
  });
});

router.put("/allPosts/:id", (req, res) => {
  Post.findOneAndUpdate({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    UserId: req.body.UserId,
  }).then(() => [res.send("sucessfully uodated")]);
});

router.delete("/allPosts/:id", (req, res) => {
  Post.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      res.send(err);
    });
});

//Router to get all saved
router.get("/favorite", (req, res) => {
  Post.find({ saved: true })
    .then((allSavedPosts) => {
      res.send(allSavedPosts);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Route to change Boolean from false to true in saved
router.patch("/favorite/:id", (req, res) => {
  console.log(req.body);
  Post.updateOne({ _id: req.params.id }, req.body).then((okpack) => {
    res.json(okpack);
  });
});

router.delete("/favorite/:id", (req, res) => {
  Post.deleteOne({
    _id: req.params.id,
  })
    .then((res) => {
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/comments/:id", (req, res) => {
  Post.findOne({
    _id: req.params.id,
  })
    .populate("comments", { comments: req.body.comments })
    .exec(function (err, completeComment) {
      if (err) {
        console.log(err);
      }
      res.send(completeComment);
    });
});

router.patch("/comments/:id", (req, res) => {
  Post.updateOne({ _id: req.params.id }, req.body)
    .then((res) => {
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
