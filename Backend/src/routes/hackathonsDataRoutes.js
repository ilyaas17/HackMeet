import express from 'express';
import { getHackathons } from '../controllers/hacktathonDataController.js';
const router = express.Router();
router.get('/hackathonsdata', getHackathons);
export default router;