import express from "express"
import mongoose from "mongoose"
import { JournalModel } from "../models/Journal.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await JournalModel.find();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const journal = new JournalModel(req.body);
        const response = await journal.save();
        res.json(response);
    } catch (err) {
        res.json(response);
    }
});

export { router as journalRouter };