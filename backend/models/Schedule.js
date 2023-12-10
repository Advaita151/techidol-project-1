import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    program: String,
    description: String,
    statuss: String,
    createdAt: { type: Date, default: Date.now }
});

export const Schedule = mongoose.model("Schedule",scheduleSchema);