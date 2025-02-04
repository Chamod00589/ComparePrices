import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());


import cors from 'cors';
app.use(cors({
  origin: '*' 
}));

import pricingRouter from "./routes/pricing.route.js";
import authRouter from './routes/auth.route.js';

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));

const port = process.env.PORT || 4000;

// http://localhost:3000/api/pricing/get/63e963bba6803e6331dd4762
app.use("/api/pricing", pricingRouter);
app.use('/api/auth', authRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
