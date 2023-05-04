import express from "express";
import mongoose from "mongoose";
import { JournalModel } from "../models/Journal.js";
import mongodb from "mongodb";
import { MongoClient } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => { // TODO: Erase this function for security reasons.
    try {
        const response = await JournalModel.find();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/add", async (req, res) => {
    try {
        const journal = new JournalModel(req.body);
        const response = await journal.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

// Define a middleware function that takes a month parameter
function checkMonth (month) {
    return function (req, res, next) {
        // Get the month value from the request params
        let monthValue = req.params.month;
        // Validate the month value
        if (monthValue >= 1 && monthValue <= 12) {
            // Pass the month value to the next middleware or route handler
            req.month = monthValue;
            next();
        } else {
            // Send an error response if the month value is invalid
            res.status(400).send('Invalid month');
        }
    }
};
  
// Use the middleware function in a route
router.get('/:year/:month', checkMonth('month'), async (req, res) => {
    // Do something with req.month
    // res.send('The month is ' + req.month + ' and the year is ' + req.params.year); // TODO: buat supaya mengambil jurnal berdasar userId, bulan, dan tahun
    
    const uri = process.env.RESTSTUDYLISM_DB_URI;

    // Create a new MongoClient
    const client = new MongoClient(uri);
    // Get the database and collection
    const database = client.db("Cluster0");
    const collection = database.collection("journals");

    // Query for documents that have a date field in January 2023
    const query = { 
    date: { 
        $gte: new Date(req.params.year, req.params.month-1, 2), 
        $lt: new Date(req.params.year, req.params.month) 
    }};

    // Find the documents that match the query
    const response = collection.find(query);
    res.json(response);

    // const a = new Date(req.params.year, req.params.month);
    // const b = new Date(req.params.year, req.params.month-1, 2);
    // res.json(query);
});

router.put('/edit', async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = new ObjectId(id);
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status
        const update = { title, description, status }
        const response = await JournalModel.findOneAndUpdate(filter, update, {new : true});
        res.json(response);
    } catch (err) {
        console.error(err);
    }
});

// Define a route handler for your delete request
router.delete('/delete', async (req, res) => {
    const uri = process.env.RESTSTUDYLISM_DB_URI;

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        const database = client.db("Cluster0");
        const journals = database.collection("journals");
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = { _id: new ObjectId(id) };
        const response = await journals.deleteOne(filter);
        res.json(response);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
});

export { router as journalRouter };