import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import userProfileRoutes from "./routes/userProfileRoutes.js"
import hackathonRoutes from './routes/hackathonsRoutes.js';
import cors from "cors";
import manageUserHackathon from "./routes/manageUserHackathon.js"

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

// Admin routes
app.use('/api/admin', adminRoutes);
app.use("/api/auth", authRoutes)

app.use("/api/hackathon", adminRoutes)

app.use("/api/user", userProfileRoutes);
app.use("/api/manageuserhackathon",manageUserHackathon)


// Start server
const port = process.env.PORT || 8070;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
