const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

router.get("/allPosts", (req, res) => {
  db.Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/newPost", (req, res) => {
  db.Post.create({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    UserId:req.body.UserId
  }).then(book => {
    res.json(book);
  });
});

module.exports = router;