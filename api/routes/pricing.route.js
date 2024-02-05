import express from "express";
import { createPricing } from "../controllers/pricing.controller.js";
const router = express.Router();


router.post("/create", createPricing);


export default router;
