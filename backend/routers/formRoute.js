import express from "express";
import { Form } from "../models/Form.js";
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
});

router.get("/api", async (req,res)=>{
    try {
        const form = await Form.findOne();
        res.json(form);
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error');
    }
    
})

export default router;