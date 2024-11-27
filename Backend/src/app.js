import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Admin routes
app.use('/admin', adminRoutes);
app.use("/api/auth", authRoutes)

// Start server
const port = process.env.PORT || 8070;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
