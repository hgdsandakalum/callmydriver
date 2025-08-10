import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../config/env";

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export function generateJWT(payload: TokenPayload): string {
  const secret = config.jwt.secret;
  if (!secret && config.env.isProduction) {
    throw new Error("JWT_SECRET must be set in production");
  }
  const expiresIn = config.jwt.expiresIn as SignOptions["expiresIn"];
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret || "dev-insecure-secret", options);
}

export function verifyJWT(token: string): TokenPayload {
  const secret = config.jwt.secret;
  try {
    return jwt.verify(token, secret || "dev-insecure-secret") as TokenPayload;
  } catch {
    throw new Error("Invalid token");
  }
}
