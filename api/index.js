import express from "express";
import path from "path";
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
  .connect(
    "mongodb+srv://chamod:chamod@mern-estate.jhpvgmu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
