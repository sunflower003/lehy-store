const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/lehy-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Import routes
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const bagRoutes = require("./routes/bag"); // Route cho bag
const bagRouter = require("./routes/bagRoutes");

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/bag", bagRoutes); // Đúng tên route bag
app.use("/api/bag", bagRouter);

//
