const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

router.post("/newPost", (req, res) => {
  db.Post.create({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    UserId: req.body.UserId
  }).then(newPosts => {
    res.send(newPosts)
  }).catch(err => {
    res.json(err)
  })
})

router.get("/allPosts", (req, res) => {
  db.Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/find/:id', (req, res) => {
  db.Post.find({
    _id: req.params.id
  }).then(searchedPost => {
    res.send(searchedPost)
  })
})

router.put('/allPosts/:id', (req, res) => {
  db.Post.findOneAndUpdate({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    UserId: req.body.UserId
  }).then(() => [
    res.send('sucessfully uodated')
  ])
})

router.delete("/allPosts/:id", (req, res) => {
  db.Post.deleteOne({
    _id: req.params.id
  }).then(() => {
    res.send("success")
  }).catch(err => {
    res.send(err)
  })
})

//Router to get all saved
router.get('/favorite', (req, res) => {
  db.Post.find({ saved: true }).then(allSavedPosts => {
    res.send(allSavedPosts)
  }).catch(err => {
    res.send(err)
  })
})

//Route to change Boolean from false to true in saved
router.patch("/favorite/:id", (req, res) => {
  console.log(req.body)
  db.Post.updateOne({ _id: req.params.id }, req.body).then((okpack) => {
    res.json(okpack)
  })
})

router.delete("/favorite/:id", (req, res) => {
  db.Post.deleteOne({
    _id: req.params.id
  }).then(res => {
    res.send(res)
  }).catch(err => {
    res.send(err)
  })
})

module.exports = router;