import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
import mongodb from 'mongodb';
import { MongoClient } from "mongodb";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body; //take email, password, and name from HTTP request body

        const user = await UserModel.findOne({ email });

        if (user) {
            return res.json({ message: "Your email has been registered. Please sign in instead." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const learningStyle = 0;

        const newUser = new UserModel({ email, password: hashedPassword, name, learningStyle });
        await newUser.save();

        res.json({ message: "User registered sucessfully" });
    } catch (err) {
        console.error(err);
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.json({ message: "email or password is incorect" }); // limiting info
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // compare and check

    if (!isPasswordValid) {
        return res.json({ message: "email or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // TODO: make sure the dotenv variable works
    res.json({ token, userID: user._id });
});

router.put('/edit_name', async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = new ObjectId(id);
        const name = req.body.name;
        const update = { name };
        const response = await UserModel.findOneAndUpdate(filter, update, { new: true });
        const updatedName = response.name;
        res.json({ updatedName });
    } catch (err) {
        console.log(err);
    }
});

router.put('/edit_password', async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = new ObjectId(id);
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        const update = { password: hashedPassword };
        const response = await UserModel.findOneAndUpdate(filter, update, { new: true });
        const updatedPassword = response.password
        res.json({ updatedPassword });;
    } catch (err) {
        console.log(err);
    }
});

router.put('/edit_email', async (req, res) => {
    try {
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = new ObjectId(id);
        const email = req.body.email;
        const update = { email };
        const response = await UserModel.findOneAndUpdate(filter, update, { new: true });
        const updatedEmail = response.email
        res.json({ updatedEmail });
    } catch (err) {
        console.log(err);
    }
});

// Define a route handler for your delete request
router.delete('/delete', async (req, res) => {
    const uri = process.env.RESTSTUDYLISM_DB_URI;

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        const database = client.db("Cluster0");
        const users = database.collection("users");
        const ObjectId = mongodb.ObjectId;
        const id = req.body._id;
        const filter = { _id: new ObjectId(id) };
        const response = await users.deleteOne(filter);
        res.json(response);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
});

export { router as userRouter }

export const verifyToken = (req, res, next) => {
    const token = req.header.authorization // TODO: add authorization header inside every request
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) return res.sendStatus(403);
            next();
        });
    } else {
        res.sendStatus(401);
    }
}




