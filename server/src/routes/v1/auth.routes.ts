import { Router } from "express";
import * as authController from "../../controllers/auth.controller";

const router = Router();

// POST /api/v1/auth/login
router.post("/login", authController.login);

// POST /api/v1/auth/register
router.post("/register", authController.register);

export default router;
