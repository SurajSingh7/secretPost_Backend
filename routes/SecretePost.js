// Import the required modules
const express = require("express")
const router = express.Router();

const { createPost, getAllPost, getPost, deletePost, updatePost } = require("../controllers/SecretPostDetails");
  
  
  router.post("/createPost", createPost);
  router.get("/getAllPost",getAllPost);
  router.get("/getPost/:id",getPost);
  router.delete("/deletePost/:id",deletePost);
  router.patch("/updatePost/:id",updatePost);

  module.exports = router;