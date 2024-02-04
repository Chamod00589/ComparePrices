import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import mongoose from "mongoose";

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

app.listen(4000, () => {
  console.log("Server is running on port 3000!");
}); 

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
