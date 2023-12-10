import express from "express";
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
import { Schedule } from "../models/Schedule.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"schedule.html"))
});

router.post("/", async (req,res)=>{
    const {program , description , statuss} = req.body;
    try {
        const newSchedule = new Schedule({
            program,
            description,
            statuss
        });
        
        await newSchedule.save();
        res.status(201).send('Schedule submitted successfully!');

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    
})

router.get("/api", async (req,res)=>{
    try {
        const schedules = await Schedule.find().sort({ createdAt: 'desc' });
        res.json(schedules);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
})
export default router;