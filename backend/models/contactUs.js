import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
      },
    contactNumber: {
        type: Number,
        required: true
      },
    comment: {
        type: String,
      }
});

export const Contact = mongoose.model("Contact", contactSchema);;