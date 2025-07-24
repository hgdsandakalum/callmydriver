import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  // TODO: Implement get user logic
  res.json({ message: "Get User" });
};
