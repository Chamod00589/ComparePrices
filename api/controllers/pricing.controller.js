import Pricing from "../models/pricing.model.js";
import { errorHandler } from "../utils/error.js";

export const createPricing = async (req, res, next) => {
  try {
    const pricing = await Pricing.create(req.body);
    return res.status(201).json(pricing);
  } catch (error) {
    next(error);
  }
};

export const getPricing = async (req, res, next) => {
  try {
    const pricingData = await Pricing.find({
      laptopId: req.params.id,
    });
    // Check if pricingData is empty (no matching records found)
    if (!pricingData || pricingData.length === 0) {
      return next(
        errorHandler(404, "Pricing data not found for the given laptopId.")
      );
    }

    res.status(200).json(pricingData);
  } catch (error) {
    next(error);
  }
};

export const updatePricing = async (req, res, next) => {
  try {
    const pricing = await Pricing.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          price: req.body.price,
          name: req.body.name,
          website: req.body.website,
          lastUpdate: req.body.lastUpdate,
        },
      },
      { new: true }
    );

    if (!pricing) {
      return next(errorHandler(404, 'Pricing not found!'));
    }

    res.status(200).json(pricing);
  } catch (error) {
    next(error);
  }
};

export const deletePricing = async (req, res, next) => {
  try {
    const pricing = await Pricing.findByIdAndDelete(req.params.id);

    if (!pricing) {
      return next(errorHandler(404, 'Pricing not found!'));
    }

    res.status(200).json({ 
      success: true,
      message: 'Pricing has been deleted!'
    });
  } catch (error) {
    next(error);
  }
};
