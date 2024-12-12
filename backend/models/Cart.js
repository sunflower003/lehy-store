const mongoose = require("mongoose");
const Product = require("./Product"); // Import trực tiếp Product model

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, default: 1 }, // Quantity of the product
    },
  ],
  totalCost: { type: Number, required: true, default: 0 }, // Total cost of the cart
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to calculate totalCost before saving/updating
CartSchema.pre("save", async function (next) {
  const cart = this;

  try {
    const total = await Promise.all(
      cart.items.map(async (item) => {
        const product = await Product.findById(item.productId); // Fetch product details
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found`);
        }
        return product.price * item.quantity; // Multiply price by quantity
      })
    );

    cart.totalCost = total.reduce((acc, curr) => acc + curr, 0); // Sum up total cost
    next();
  } catch (err) {
    next(err); // Pass the error to the next middleware
  }
});

// Middleware to update `updatedAt` timestamp
CartSchema.pre("updateOne", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

module.exports = mongoose.model("Cart", CartSchema);
