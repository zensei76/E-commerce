import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";

config();

const app = express();



// Middleware
app.use(cors({
	origin: ["https://e-commerce-azure-xi.vercel.app", "http://localhost:3000"],
	credentials: true,
  }));


app.use(express.json());

// Routes
app.use("/api/v1", appRouter);

export default app;
