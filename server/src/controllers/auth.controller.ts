import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../domain/dtos/auth/LoginDto";
import { RegisterDto } from "../domain/dtos/auth/RegisterDto";
import { HttpError } from "../utils/httpError";

const authService = new AuthService();

export const login = async (
  req: Request<unknown, unknown, LoginDto>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authService.login(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (
  req: Request<unknown, unknown, RegisterDto>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user,
    });
  } catch (error) {
    next(
      error instanceof HttpError
        ? error
        : new HttpError(500, "Registration failed.")
    );
  }
};
