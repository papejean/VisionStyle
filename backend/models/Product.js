const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({ 
  name: String, 
  description: String, 
  price: Number, 
  promoPrice: Number, 
  promoStart: Date, 
  promoEnd: Date, 
  sizes: [String], 
  colors: [String], 
  stock: Number, 
  images: [String], 
  isActive: Boolean, 
}); 
module.exports = mongoose.model('Product', productSchema); 
