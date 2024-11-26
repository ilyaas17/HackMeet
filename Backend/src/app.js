import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); 

// Admin routes
app.use('/admin', adminRoutes);

// Start server
const port = process.env.PORT || 8070;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
