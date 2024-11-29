import express from 'express';
import { registerUser } from '../controllers/registrationController.js'; 

const router = express.Router();

router.post('/registeruser', registerUser);

export default router;
