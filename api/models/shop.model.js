import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  name: String,
  location: String,
  phone: [String],
  pricings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pricing' }],
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
