// backend/routes/authRoutes.js
import express from "express"
import {login, signup } from "../controllers/authController.js"
import { authenticateUser } from '../middleware/authUser.js'
import { createHackathon } from "../controllers/adminController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post('/hackathon', authenticateUser , createHackathon);

export default router;
