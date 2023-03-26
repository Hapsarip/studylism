import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/Users.js";


const router = express.Router()

router.post("/register", async (req, res) => {
    const { email, password } = req.body; //take email and password from HTTP request body

    const user = await UserModel.findOne({ email }); //cari pakai UserModel apakah email ada
    //({ email: email }) disingkat jadi ({ email })
 
    if (user) {
        return res.json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ email, password: hashedPassword }); 
    await newUser.save(); 

    res.json({ message: "User registered sucessfully" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.json({ message: "User doesn't exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); //compare password provided by 

    if (!isPasswordValid) {
        return res.json({ message: "email or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); //TO DO: make sure the dotenv variable works
    res.json({ token, userID: user._id });
});

export { router as userRouter }





