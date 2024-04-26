const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const app = express();
const uri = "mongodb+srv://dev:LIzIegGCtrNHv1xd@cluster0.cxhlnow.mongodb.net/pharmaShop"
//mongoose.connect("mongodb://localhost:27017/Projet_PFE");
// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));
const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const panierRoutes = require("./routes/panier");
const feedbackRoutes = require("./routes/feedback");
const whishlistRoutes = require("./routes/whishlist");
const avisproRoutes = require("./routes/avispro");
const forgotPasswordRoutes = require("./routes/forgotPassword");
const resetPasswordRoutes = require("./routes/resetPasswordAPI");
const categoryRoutes = require("./routes/category");
const blogRoutes = require("./routes/blog");
const orderRoutes = require("./routes/order");
const swapRoutes = require("./routes/swaps");

//Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Log HTTP requests
app.use(morgan("dev"));

//Secutity configuration
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // Allow requests from Angular
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT");
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials like cookies, if needed
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/panier", panierRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/whish", whishlistRoutes);
app.use("/api/avis", avisproRoutes);
app.use("/api/forgotPassword", forgotPasswordRoutes);
app.use("/api/resetPassword", resetPasswordRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/swaps", swapRoutes);

const PORT = process.env.PORT || 3001; // Default to port 3000 if not specified in environment variables

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
