import mongoose from "mongoose";

const LearningStyleSchema = new mongoose.Schema({
    index: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String , required: true },
    tips: { type: String, required: true }
});

export const LearningStyleModel = mongoose.model("learningstyles", LearningStyleSchema);