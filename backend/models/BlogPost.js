import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);

