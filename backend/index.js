import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import contactUsRoute from './routers/contactUsRoute.js'
import path from 'path'

dotenv.config();
const app = express();
const PORT = process.env.PORT
const mongoDB = process.env.MONGODB_URI


const mongo = "mongodb://localhost:27017/techidol1"

app.use(express.json());
app.use(cors());
// app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.status(234).send("WELCOME to my website")
})



app.use("/contact",contactUsRoute);

mongoose
    .connect(mongoDB)
    .then(()=>{
        console.log("App is connected to mongoose")  
        app.listen(PORT, () =>{
            console.log(`Listening to port ${PORT}`)
        })
    })
    .catch((error) =>{
        console.log(error)
    })