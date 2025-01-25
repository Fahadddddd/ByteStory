const express = require("express");
const Post = require("../models/posts");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Correct import
const router = express.Router();

// Secure POST route with authMiddleware
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({
      title,
      content,
      author: req.auth.userId, // Clerk stores user ID in req.auth.userId
    });

    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name");
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
