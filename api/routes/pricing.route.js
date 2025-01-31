import express from "express";
import { createPricing, getPricing, updatePricing, deletePricing } from "../controllers/pricing.controller.js";
const router = express.Router();

router.post("/create", createPricing);
router.get("/get/:id", getPricing);
router.put("/update/:id", updatePricing);
router.delete("/delete/:id", deletePricing);

export default router;
