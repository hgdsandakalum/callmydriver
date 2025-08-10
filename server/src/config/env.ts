import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  DATABASE_URL: z.string().default(""),
  JWT_SECRET: z.string().default(""),
  JWT_EXPIRES_IN: z.string().default("24h"),
  CORS_ORIGIN: z.string().optional(),
});

const parsed = EnvSchema.parse(process.env);

const corsOrigins = parsed.CORS_ORIGIN
  ? parsed.CORS_ORIGIN.split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : ["http://localhost:3000"];

export const config = {
  env: {
    nodeEnv: parsed.NODE_ENV,
    isProduction: parsed.NODE_ENV === "production",
    isDevelopment: parsed.NODE_ENV === "development",
    isTest: parsed.NODE_ENV === "test",
  },
  server: {
    port: parsed.PORT,
  },
  database: {
    url: parsed.DATABASE_URL,
  },
  jwt: {
    secret: parsed.JWT_SECRET,
    expiresIn:
      parsed.JWT_EXPIRES_IN as import("jsonwebtoken").SignOptions["expiresIn"],
  },
  cors: {
    origins: corsOrigins,
  },
} as const;
