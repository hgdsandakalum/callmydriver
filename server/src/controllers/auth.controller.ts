import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  // TODO: Implement login logic
  res.json({ message: "Login" });
};

export const register = async (req: Request, res: Response) => {
  // TODO: Implement register logic
  res.json({ message: "Register" });
};
