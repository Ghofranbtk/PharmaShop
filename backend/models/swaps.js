const mongoose = require("mongoose");

const swapSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  categorie: String,
  description: String,
  img: String,
  imgg: String,
  stock: {
    type: Boolean,
    default: true,
  },
  detail: String,
  user: String,
});

const product = mongoose.model("Swap", swapSchema);

module.exports = product;
