import Pricing from "../models/pricing.model.js";

export const createPricing = async (req, res) => {
  try {
    const pricing = await Pricing.create(req.body)
    return res.status(201).json(pricing);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
