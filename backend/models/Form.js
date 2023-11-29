import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  Form_ID: Number,
  Form_Name: String,
  Full_Name: Boolean,
  Father_Name: Boolean,
  Qualification: Boolean,
  Occupation: Boolean,
  Email_Address: Boolean,
  Phone_Nuber: Boolean,
  Birth_Date: Boolean,
  Gender: Boolean,
  Address: Boolean,
  Aadhar_Card: Boolean,
  Marital_Status: Boolean,
});

export const Form = mongoose.model('Form', formSchema);