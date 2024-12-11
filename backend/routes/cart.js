const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Lấy giỏ hàng của user
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving cart: " + err.message });
  }
});

// Thêm sản phẩm vào giỏ hàng
router.post("/:userId", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      // Tạo giỏ hàng mới nếu chưa tồn tại
      cart = new Cart({ userId: req.params.userId, items: [] });
    }

    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (itemIndex > -1) {
      // Nếu sản phẩm đã tồn tại, cập nhật số lượng
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới
      cart.items.push({ productId, quantity });
    }

    cart.updatedAt = Date.now();
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart: " + err.message });
  }
});

// Xóa sản phẩm khỏi giỏ hàng
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }

    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    cart.updatedAt = Date.now();
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error removing item: " + err.message });
  }
});

module.exports = router;