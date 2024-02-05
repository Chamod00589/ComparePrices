import express from "express";
import { createPricing } from "../controllers/pricing.controller.js";
const router = express.Router();


router.post("/create", createPricing);
// router.get("/get", getPricings);



export default router;
