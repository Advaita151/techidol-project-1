import express from "express";
import { Contact } from "../models/contactUs.js"

const router = express.Router();

router.post("/", async (req,res) =>{
    try{
        if(!req.body.firstName||!req.body.lastName||!req.body.email||!req.body.contactNumber){
            return res.status(400).send({
                message: "Send all required fields"
            })
        }
        const newContact ={
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            comment: req.body.comment
        }
        const contact = await Contact.create(newContact);
        return res.status(201).send(contact);
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

export default router;