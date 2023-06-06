import express from "express";
import mongoose from "mongoose";
import { LearningStyleModel } from "../models/LearningStyle.js";
import mongodb from "mongodb";
import { MongoClient } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => { // TODO: Erase this function.
    try {
        res.json("learning style router");
    } catch (err) {
        res.json(err);
    }
});

router.get("/all", async (req, res) => { // TODO: Erase this function.
    try {
        const response = await LearningStyleModel.find();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        // const ObjectId = mongodb.ObjectId;
        // const id = req.body._id;
        // const filter = { userId: new ObjectId(id) };
        // const response = await JournalModel.find(filter);
        // const resultByMonth = pickDesiredJournalByMonth(response, req.params.month, req.params.year);
        // const resultByDay = pickDesiredJournalByDay(response, req.params.day, req.params.month, req.params.year);
        // const progressByDay = calculateProgress(resultByDay);
        // const result = {resultByMonth, resultByDay, progressByDay};
        const index = parseInt(req.params.id);
        const filter = { index: index };
        const response = await LearningStyleModel.findOne(filter);

        res.json(response);
    } catch (err) {
        console.error(err);
    }
});

// router.post("/add", async (req,res) => {
//     try {
        
//     }
// })

export { router as learningStyleRouter };