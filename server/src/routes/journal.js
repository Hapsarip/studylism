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
  
function pickDesiredJournalByMonth(jsonFromRes, month, year) {
    const desiredMonth = month;
    const desiredYear = year;
    const jsonToBeInspected = jsonFromRes;
    let result = [];
    for (let doc in jsonToBeInspected) {
        const dateFromJson = new Date(jsonToBeInspected[doc].date);
        const yearFromJson = dateFromJson.getFullYear();
        const monthFromJson = dateFromJson.getMonth() + 1;
        if(yearFromJson == desiredYear && monthFromJson == desiredMonth) {
            result.push(jsonToBeInspected[doc]);
        }
    }
    return result;
};

function pickDesiredJournalByDay(jsonFromRes, day, month, year) {
    const desiredDay = day;
    const desiredMonth = month;
    const desiredYear = year;
    const jsonToBeInspected = jsonFromRes;
    let result = [];
    for (let doc in jsonToBeInspected) {
        const dateFromJson = new Date(jsonToBeInspected[doc].date);
        const yearFromJson = dateFromJson.getFullYear();
        const monthFromJson = dateFromJson.getMonth() + 1;
        const dayFromJson = dateFromJson.getDate();
        if(yearFromJson == desiredYear && monthFromJson == desiredMonth && dayFromJson == desiredDay) {
            result.push(jsonToBeInspected[doc]);
        }
    }
    return result;
};

function calculateProgress(pickedJson) {
    const jsonToBeInspected = pickedJson;
    let journalDone = 0;
    let numberOfDoc = 0;
    for (let doc in jsonToBeInspected) {
        if (jsonToBeInspected[doc].status == 3) {
            journalDone++;
        }
    numberOfDoc++;
    }
    const calc = journalDone / numberOfDoc;
    const result = calc.toFixed(3);
    return result;
}

// router.get('/:year/:month', checkMonth('month'), async (req, res) => {
//     try {
//         const ObjectId = mongodb.ObjectId;
//         const id = req.body._id;
//         const filter = { userId: new ObjectId(id) };
//         const response = await JournalModel.find(filter);
//         const result = pickDesiredJournalByMonth(response, req.params.month, req.params.year);
//         res.json(result);
//     } catch (err) {
//         console.error(err);
//     }
// });

router.post('/:year/:month/:day', checkMonth('month'), async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = { userId: new ObjectId(id) };
        const response = await JournalModel.find(filter);
        const resultByMonth = pickDesiredJournalByMonth(response, req.params.month, req.params.year);
        const resultByDay = pickDesiredJournalByDay(response, req.params.day, req.params.month, req.params.year);
        const progressByDay = calculateProgress(resultByDay);
        const result = {resultByMonth, resultByDay, progressByDay};
        res.json(result);
    } catch (err) {
        console.error(err);
    }
});

router.put('/edit', async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = new ObjectId(id);
        // const title = req.body.title;
        // const description = req.body.description;
        const status = req.body.status;
        // const update = { title, description, status };
        const update = { status };
        const response = await JournalModel.findOneAndUpdate(filter, update, {new : true});
        const updatedStatus = response.status;
        res.json(updatedStatus);
    } catch (err) {
        console.error(err);
    }
});

// router.put('/editStatus', async (req, res) => {
//     try {
//         const ObjectId = mongodb.ObjectId;
//         const id = req.body._id;
//         const filter = new ObjectId(id);
//         const status = req.body.status;
//         const update = { status };
//         const response = await UserModel.findOneAndUpdate(filter, update, {
//           new: true,
//         });
//         const updatedStatus = response.status;
//         res.json({ updatedStatus });
//     } catch (err) {
//         console.error(err);
//     }
// });

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