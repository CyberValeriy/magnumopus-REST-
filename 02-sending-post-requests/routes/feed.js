const express = require("express");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");
const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", isAuth, feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

//GET /feed/post(single)
router.get("/post/:postId", isAuth, feedController.getPost);

//PUT feed/post/:id(post updating)
router.put(
  "/post/:postId",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.updatePost
);

//DELETE feed/post/:id
router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;