import express from "express";
import { createPricing, getPricing } from "../controllers/pricing.controller.js";
const router = express.Router();


router.post("/create", createPricing);
router.get("/get/:id", getPricing);



export default router;
