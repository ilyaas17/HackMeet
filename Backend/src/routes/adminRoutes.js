import express from 'express';
import { loginAdmin, registerAdmin, createHackathon } from '../controllers/adminController.js';
// import { authAdmin } from '../middleware/authAdmin.js';


const router = express.Router();

// Admin login
router.post('/login', loginAdmin);

// Admin registration
router.post('/register', registerAdmin);


export default router;
