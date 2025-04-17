import Register from "../Login_schema/RegisterSchema.js"; // <-- CHANGED THIS
import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    console.log("Login attempt:", { email, password });

    try {
        // Find user by email first in the REGISTER collection
        const user = await Register.findOne({ email }); // <-- CHANGED THIS
        
        // Debug what we got from the database
        console.log("User found:", user ? "Yes" : "No");
        
        // If no user found with that email
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // console.log("DB Password:", user.password);
        // console.log("Input Password:", password);
        // console.log("Match?", user.password === password);

        // Compare passwords directly
        if (user.password === password) {
            // Create a response object manually without password
            const userResponse = {
                _id: user._id,
                name: user.name,
                email: user.email
            };
            
            res.status(200).json({ 
                message: "Login successful",
                user: userResponse
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;