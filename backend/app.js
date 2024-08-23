import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";

config();

const app = express();

const CLIENT_URL = process.env.FRONTEND_URL || "https://e-commerce-azure-xi.vercel.app";

// Middleware
app.use(
	cors({
		origin: CLIENT_URL,
		credentials: true,
	})
);



app.use(express.json());

// Routes
app.use("/api/v1", appRouter);

export default app;
