import express from 'express';
import { loginAdmin, registerAdmin, createHackathon } from '../controllers/adminController.js';


const router = express.Router();
router.post('/login', loginAdmin);
router.post("/createhackathon",createHackathon)
router.post('/register', registerAdmin);


export default router;
