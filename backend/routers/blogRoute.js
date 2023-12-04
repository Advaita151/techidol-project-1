import express from "express";
import { BlogPost } from "../models/BlogPost.js";
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"blogIndex.html"))
});

router.post('/', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const newBlogPost = new BlogPost({
        title,
        content,
      });
  
      await newBlogPost.save();
  
      res.status(201).send('Blog post submitted successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


export default router;