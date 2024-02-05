import mongoose from "mongoose";

// laptopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Laptop' },
const pricingSchema = new mongoose.Schema({
  laptopId: String,
  price: Number,
  website: String,
  lastUpdate: Date,
});

const Pricing = mongoose.model('Pricing', pricingSchema);

export default Pricing;
