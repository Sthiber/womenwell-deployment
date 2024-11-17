import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path"; // For serving static files

import fruitRouter from "./routers/edibles.js";
import authRouter from "./routers/auth.js";
import appointmentRouter from "./routers/appointment.js";
import dataFetchRouter from "./routers/dataFetch.js";

const app = express();

// CORS options configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Allow your frontend's origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials such as cookies or headers
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use("/edibles", fruitRouter);
app.use("/auth", authRouter);
app.use("/appointment", appointmentRouter);
app.use("/dataFetch", dataFetchRouter);

// Serve static files for the frontend

// Handle all other routes by serving index.html for client-side routing

export default app;
