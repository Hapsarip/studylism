import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js"
import { journalRouter } from "./routes/journal.js"
import { learningStyleRouter } from "./routes/learningStyle.js"

dotenv.config()  

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/journal", journalRouter);
app.use("/learning-style", learningStyleRouter);

mongoose.connect(
    process.env.RESTSTUDYLISM_DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

app.listen(3001, () => console.log("SERVER STARTED!"));
