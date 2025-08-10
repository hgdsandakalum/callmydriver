import mongoose from "mongoose";
import { config } from "../config/env";

export async function connectDatabase(): Promise<void> {
  try {
    if (!config.database.url) {
      throw new Error(
        "DATABASE_URL is missing. Set it in your environment variables."
      );
    }

    await mongoose.connect(config.database.url);
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
