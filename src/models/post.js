const posts = [];

let currentId = 1;

function getAllPost() {
  return JSON.parse(JSON.stringify(posts));
}

function addPost(post) {
  const { author, content } = post;
  const newPost = { author, content, id: currentId++ };
  posts.push(newPost);
  return newPost;
}

function getPostById(id) {
  return posts.find((i) => i.id === id);
}

function updatePostById(id, newPost) {
  const { author, content } = newPost;
  const post = posts.find((i) => i.id === id);
  post.author = author;
  post.content = content;
  return post;
}

function deletePostById(id) {
  const postIndex = getPostIndexById(id);
  const deletePost = posts.splice(postIndex, 1);
  return deletePost;
}

function getPostIndexById(id) {
  return posts.findIndex((i) => i.id === id);
}

function doesIdExist(id) {
  return getPostIndexById(id) !== -1;
}
module.exports = {
  getAllPost,
  addPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostIndexById,
  doesIdExist,
};

// const posts = [];
// let currentId = 1;

// app.get("/posts", (req, res) => {
//   return res.json(posts);
// });

// app.get("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const post = posts.find((i) => i.id === Number(id));
//   if (!post) {
//     return res.sendStatus(404);
//   }
//   res.json(post);
// });

// app.post("/posts", (req, res) => {
//   const { author, content } = req.body;
//   const newPost = { author, content, id: currentId++ };
//   posts.push(newPost);
//   res.json(newPost);
// });

// app.put("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   const { author, content } = req.body;
//   const post = posts.find((i) => i.id === Number(id));
//   if (!post) {
//     return res.sendStatus(404);
//   }
//   post.author = author;
//   post.content = content;
//   res.json(post);
// });

// app.delete("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   //   let postIndex = -1;
//   //   for (let i = 0; i < posts.length; i++) {
//   //     if (posts[i].id === Number(id)) {
//   //       postIndex = i;
//   //       break;
//   //     }
//   //   }
//   const postIndex = posts.findIndex((i) => i.id === Number(id)); // -1, 0 - (length-1)
//   if (postIndex === -1) {
//     return res.sendStatus(404);
//   }
//   const deletedPost = posts.splice(postIndex, 1);
//   // res.sendStatus(200);
//   res.json(deletedPost);
// });
