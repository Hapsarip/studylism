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
        const index = parseInt(req.params.id);
        const filter = { index: index };
        const response = await LearningStyleModel.findOne(filter);
        res.json(response);
    } catch (err) {
        console.error(err);
    }
});

export { router as learningStyleRouter };