const express = require("express");
const router = express.Router();
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models")

router.post("/post/:id", (req, res) => {
    console.log("GOT IT", req.body, req.params.id)
    db.Comments.create({ text: req.body.text, post: req.params.id })
        .then(x => {
            commentid = x._id
            //update posts to inclue this comment
         })
  })

module.exports = router;