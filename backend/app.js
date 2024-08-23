import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";

config();

const app = express();

const CLIENT_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// Middleware
// app.use(
// 	cors({
// 		origin: CLIENT_URL,
// 		credentials: true,
// 	})
// );

app.use(
	cors({
	  origin: '*', // Allow all origins
	  methods: "GET,POST,PUT,DELETE,OPTIONS",
	  allowedHeaders: "Content-Type,Authorization",
	  credentials: true, // Allow cookies and credentials
	})
  );

app.use(express.json());

// Routes
app.use("/api/v1", appRouter);

export default app;
