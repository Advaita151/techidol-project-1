import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import contactUsRoute from './routers/contactUsRoute.js'
import dashboardRoute from './routers/dashboardRoute.js'
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT
const mongoDB = process.env.MONGODB_URI

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const mongo = "mongodb://localhost:27017/techidol1"

app.use(express.json());
app.use(cors());
app.use(express.static('../public'));
app.use("/contact",contactUsRoute);
app.use("/dashboard",dashboardRoute);


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})





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