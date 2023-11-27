import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: String,
  region: String, 
});

export const Volunteer = mongoose.model('Volunteer', volunteerSchema);