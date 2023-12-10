import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from 'cookie-parser';
import contactUsRoute from './routers/contactUsRoute.js'
import dashboardRoute from './routers/dashboardRoute.js'
import loginRoute from './routers/loginRoute.js'
import scheduleRoute from './routers/scheduleRoute.js'
import createFormRoute from './routers/createFormRoute.js'
import volunteerRoute from './routers/volunteerRoute.js'
import volunteerRegisterRoute from './routers/volunteerRegisterRoute.js'
import blogRoute from './routers/blogRoute.js'
import formRoute from './routers/formRoute.js'
import matrimonyRoute from './routers/matrimonyRoute.js'
import profileRoute from './routers/profileRoute.js'
import { protect } from './protect.js';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT
const mongoDB = process.env.MONGODB_URI

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static('../public'));
app.use("/contact",protect,contactUsRoute);
app.use("/volunteerRegister",protect,volunteerRegisterRoute);
app.use("/dashboard",protect,dashboardRoute);
app.use("/login",loginRoute);
app.use("/schedule",protect,scheduleRoute);
app.use("/create_form",protect,createFormRoute);
app.use("/volunteer",protect,volunteerRoute);
app.use("/blog",protect,blogRoute);
app.use("/form",protect,formRoute);
app.use("/matrimony",protect,matrimonyRoute);
app.use("/profile",protect,profileRoute);


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