import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { LoginDto } from "../domain/dtos/auth/LoginDto";
import { hashPassword } from "../utils/password";
import { UserModel } from "../data/models/UserModel";

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
  try {
    const loginDto: LoginDto = {
      email: req.body.email,
      password: req.body.password,
    };

    const result = await authService.login(loginDto);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Login failed";

    res.status(401).json({
      success: false,
      message: errorMessage,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role, name } = req.body;

    // Basic validation
    if (!email || !password || !role || !name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists." });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = new UserModel({
      email,
      password: hashedPassword,
      role,
      name,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Registration failed.";
    res.status(500).json({
      success: false,
      message: "Registration failed.",
      error: errorMessage,
    });
  }
};
