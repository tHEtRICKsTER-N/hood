import express from "express";
import { LogIn, LogOut, signUp } from "../controllers/authController.js";

const router = express.Router()

router.post('/login', LogIn)
router.post('/signup', signUp)
router.post('/logout', LogOut)

export default router;