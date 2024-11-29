import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import userProfileRoutes from "./routes/userProfileRoutes.js"
import cors from "cors";
import manageUserHackathon from "./routes/manageUserHackathon.js"
import hackDataRoutes from "./routes/hackathonsDataRoutes.js"
import registrationRoutes from './routes/registrationRoutes.js';


dotenv.config();


connectDB();

const app = express();


app.use(express.json()); 
app.use(cors());


app.use('/api/admin', adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hackathon", adminRoutes);
app.use("/api/user", userProfileRoutes);
app.use("/api/manageuserhackathon", manageUserHackathon);
app.use("/api/allhackathon", hackDataRoutes);
app.use("/api/register", registrationRoutes);
app.use("/api/getparticluarhack",hackDataRoutes)


const port = process.env.PORT || 8070;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
