import express from "express";
import { Volunteer } from "../models/Volunteer.js";
import {Donation} from "../models/Donation.js";
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"volunteer.html"))
});

router.post('/', async (req, res) => {
    const { name,
      fathername,
      qualification,
      occupation,
      email,
      password,
      phone,
      date,
      address,
      city,
      region,
      pincode,
      marital,
      aadhaar,
     } = req.body;
    
    try {
      const newVolunteer = new Volunteer({
        name,
        fathername,
        qualification,
        occupation,
        email,
        password,
        phone,
        date,
        address,
        city,
        region,
        pincode,
        marital,
        aadhaar, 
      });
    
      await newVolunteer.save();
    
      res.status(201).send('Volunteer added successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

export default router;