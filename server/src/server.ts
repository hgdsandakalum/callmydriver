import app from "./app";
import { config } from "./config/env";
import { connectDatabase, disconnectDatabase } from "./data/database";

async function startServer() {
  try {
    // Connect to database
    await connectDatabase();

    // Start server
    const server = app.listen(config.server.port, () => {
      console.log(
        `Server running on port ${config.server.port} (${config.env.nodeEnv})`
      );
    });

    const gracefulShutdown = async (signal: string) => {
      try {
        console.log(`${signal} received. Shutting down gracefully...`);
        server.close(async () => {
          await disconnectDatabase();
          console.log("HTTP server closed");
          process.exit(0);
        });
      } catch (err) {
        console.error("Error during shutdown", err);
        process.exit(1);
      }
    };

    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

    process.on("unhandledRejection", (reason) => {
      console.error("Unhandled Rejection:", reason);
    });
    process.on("uncaughtException", (err) => {
      console.error("Uncaught Exception:", err);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
