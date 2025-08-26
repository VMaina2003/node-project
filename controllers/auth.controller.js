import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

// Register the user
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUsername = await User.findOne({ username });
        if (existingUsername)
            return res.status(400).json({ message: "Username already taken." });
        
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already in use." });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "user registered successfully." });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

<<<<<<< HEAD
// Login
=======
// Login



>>>>>>> 871daaec6386c2ce354ab4ee34cb4a788dc6c39a
