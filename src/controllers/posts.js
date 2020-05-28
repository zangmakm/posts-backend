const postModel = require("../models/post");

function addPost(req, res) {
  const { author, content } = req.body;
  // validation
  const newPost = postModel.addPost({ author, content });
  res.status(201).json(newPost);
}

function getAllPosts(req, res) {
  res.json(postModel.getAllPost());
}

function getPostById(req, res) {
  const { id } = req.params;
  const post = postModel.getPostById(id);
  res.json(post);
}

function updatePostById(req, res) {
  const { id } = req.params;
  const { author, content } = req.body;
  const post = postModel.updatePostById(id, { author, content });
  res.status(201).json(post);
}

function deletePostById(req, res) {
  const { id } = req.params;
  const deletePost = postModel.deletePostById(id);
  res.json(deletePost);
}

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
