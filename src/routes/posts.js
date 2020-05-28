const express = require("express");
const {
  addPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/posts");
const validateId = require("../middleware/validateId");
const router = express.Router();

// GET /v1/posts/ :id
router.get("/:id", validateId, getPostById);
//GET /v1/posts
router.get("", getAllPosts);

router.post("", addPost);

router.put("/:id", validateId, updatePostById);

router.delete("/:id", validateId, deletePostById);

module.exports = router;
