import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

import pricingRouter  from "./routes/pricing.route.js";


// import path from "path";
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });



app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/pricing", pricingRouter);

// app.get("/api/pricing/create", (req, res) => {
//   res.send("Hello world")
// });


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
