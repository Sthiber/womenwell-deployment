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
  origin: "https://hospital-system-frontend.vercel.app", // Allow your frontend's origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials such as cookies or headers
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(bodyParser.json()); // Parse JSON requests
app.options("*", cors(corsOptions)); // Handle preflight requests

// Routes
app.use("/api/edibles", fruitRouter);
app.use("/api/auth", authRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/dataFetch", dataFetchRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend/build")));

// Fallback for React client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

export default app;
