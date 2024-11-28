// backend/routes/authRoutes.js
import express from "express"
import {getUserHackathons,updateUserHackathon, deleteUserHackathon } from "../controllers/manageUserhackathonController.js"
const router = express.Router();

router.get("/getuserhackathons", getUserHackathons);
router.put("/updateuserhackathon", updateUserHackathon);
router.delete("/deleteuserhackathon", deleteUserHackathon);



export default router;
