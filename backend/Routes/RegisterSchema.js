import Register from "../Login_schema/RegisterSchema.js";
import express from "express";
import dotenv from "dotenv";
const router = express.Router();

dotenv.config({ path: "./.env" });
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await Register.create({ name, email, password });
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}); 

export default router;