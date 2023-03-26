import mongoose from "mongoose";

const JournalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // date: { type: Date, required: true },
    description: { type: String },
    status: { type: Number, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

export const JournalModel = mongoose.model("journals", JournalSchema);