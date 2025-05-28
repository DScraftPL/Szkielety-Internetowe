const express = require("express");
const Post = require("./models/Post");

const router = express.Router();

// GET /api/posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// POST /api/posts
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

// DELETE /api/posts/:id
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Post deleted" });
});

module.exports = router;