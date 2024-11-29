import express from "express"
import { getUserProfile,updateUserProfile } from "../controllers/userProfileController.js";

const router = express.Router();

router.get("/:email", getUserProfile);
router.put("/:email", updateUserProfile);

export default router;
