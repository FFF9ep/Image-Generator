import { registerUser, loginUser } from "../Controllers/UserController.js";
import express from 'express';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
