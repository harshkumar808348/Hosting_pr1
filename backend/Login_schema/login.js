import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
export default mongoose.model("Login", loginSchema);