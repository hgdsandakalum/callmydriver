import { Router } from "express";
import rateLimit from "express-rate-limit";
import * as authController from "../../controllers/auth.controller";
import { validationMiddleware } from "../../middlewares/validation.middleware";
import { LoginSchema } from "../../domain/dtos/auth/LoginDto";
import { RegisterSchema } from "../../domain/dtos/auth/RegisterDto";

const router = Router();

const loginSchema = LoginSchema;
const registerSchema = RegisterSchema;

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

// POST /api/v1/auth/login
router.post(
  "/login",
  authLimiter,
  validationMiddleware({ body: loginSchema }),
  authController.login
);

// POST /api/v1/auth/register
router.post(
  "/register",
  authLimiter,
  validationMiddleware({ body: registerSchema }),
  authController.register
);

export default router;
