const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  date: Date,
  number: Number,
  total_prices: Number,
  products: Array,
  user: String,
  status: {
    type: Boolean,
    default: false,
  },
  swap_user: Array,
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;
