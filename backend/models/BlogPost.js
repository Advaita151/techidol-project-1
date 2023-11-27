import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  
});

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);

