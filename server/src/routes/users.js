import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/Users.js";


const router = express.Router()

router.post("/register", async (req, res) => {
    const { username, password } = req.body; //take username and password from HTTP request body

    const user = await UserModel.findOne({ username }); //cari pakai UserModel apakah username ada
    //({ username: username }) disingkat jadi ({ username })
 
    if (user) {
        return res.json({ message: "User already exists!" });
    }



    res.json(user); //hanya untuk tes koneksi. bukan fungsi sebenarnya.
});

router.post("/login")

export { router as userRouter }





