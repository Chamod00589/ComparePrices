import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
  laptopId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  lastUpdate: Date,
});

const Pricing = mongoose.model("Pricing", pricingSchema);
export default Pricing;
