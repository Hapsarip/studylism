import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    name: { type: String, required: true },
    learningStyle: { type: Number }
});

export const UserModel = mongoose.model("users", UserSchema)