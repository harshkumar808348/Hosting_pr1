import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import LoginRoutes from "./Routes/loginRoutes.js";
import RegisterRoutes from "./Routes/RegisterSchema.js";

dotenv.config({ path: "./.env" }); 

const app = express();
const port = process.env.PORT || 5000;

const FRONTEND_URL = process.env.FRONTEND_URL

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));
app.use(express.json());


app.use("/api", LoginRoutes);
app.use("/api", RegisterRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
