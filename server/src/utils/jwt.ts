import jwt, { SignOptions } from "jsonwebtoken";

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export function generateJWT(payload: TokenPayload): string {
  const secret: string = process.env.JWT_SECRET || "your-secret-key";
  const expiresIn = (process.env.JWT_EXPIRES_IN || "24h") as SignOptions["expiresIn"];

  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret, options);
}

export function verifyJWT(token: string): TokenPayload {
  const secret = process.env.JWT_SECRET || "your-secret-key";

  try {
    return jwt.verify(token, secret) as TokenPayload;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
