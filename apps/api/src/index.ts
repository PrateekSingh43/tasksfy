import express, { Request, Response } from "express";
import cors from "cors";
import { logger, httpLogger } from "./config/logger.js";
import { prisma } from "@repo/db";

// Create the Express app
const app = express();
const port = process.env.PORT || 4000;

// --- Middleware Setup ---
app.use(httpLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
app.get("/api/health", async (req: Request, res: Response) => {
  logger.info("Health check route was hit");
  try {
    // This query uses the imported client
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: "ok",
      message: "API is healthy and connected to the database",
    });
  } catch (dbError) {
    logger.error(dbError, "Database health check failed");
    res.status(503).json({
      status: "error",
      message: "API is unhealthy, database connection failed",
    });
  }
});

// --- Server Startup ---
app.listen(port, () => {
  logger.info(`API Server listening at http://localhost:${port}`);
});
