import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/httpError";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const isHttpError = err instanceof HttpError;
  const status = isHttpError ? err.status : 500;
  const message = isHttpError
    ? err.message
    : process.env.NODE_ENV === "production"
    ? "Internal Server Error"
    : (err as Error)?.message || "Internal Server Error";

  const responseBody: Record<string, unknown> = {
    success: false,
    message,
  };

  if (isHttpError && err.code) responseBody.code = err.code;
  if (process.env.NODE_ENV !== "production") {
    responseBody.details = (err as Error)?.stack;
  }

  res.status(status).json(responseBody);
}
