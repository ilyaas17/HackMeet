import express from 'express';
import { getHackathons } from '../controllers/hacktathonDataController.js';
import { getHackathon } from '../controllers/hacktathonDataController.js';

const router = express.Router();

router.get('/hackathonsdata', getHackathons);

router.get('/hackathonpage/:hackathonId', getHackathon);  //The apply now  button in Home Component triggers this function.

export default router;