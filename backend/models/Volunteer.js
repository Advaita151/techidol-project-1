import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  fathername: String,
  qualification: String,
  occupation: String,
  email: String,
  password: String,
  phone: Number,
  date: Date,
  gender: String,
  address: String,
  city: String,
  region: String,
  pincode: Number,
  marital: String,
  aadhar: String, 
});

export const Volunteer = mongoose.model('Volunteer', volunteerSchema);