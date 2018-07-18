var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
  companyName: String,
  carModel: String,
  color: String,
  description: String,
  releaseYear: String,
  price: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Car', CarSchema);
