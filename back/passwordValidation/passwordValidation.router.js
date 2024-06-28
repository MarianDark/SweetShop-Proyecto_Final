import express from "express";
import { validatePassword } from "./passwordValidation.controller.js";

const router = express.Router();

// Endpoint to validate password
router.post("/validate", validatePassword);

export default router;
