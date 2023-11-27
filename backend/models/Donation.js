import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  amount: Number,
});

export const Donation = mongoose.model('Donation', donationSchema);
