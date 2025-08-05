import mongoose from "mongoose";
import { DATABASE_URL } from "../config/database";

export async function connectDatabase(): Promise<void> {
  try {
    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }

    await mongoose.connect(DATABASE_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
}
