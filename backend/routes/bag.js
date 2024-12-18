const express = require("express");
const Bag = require("../models/Bag");
const router = express.Router();

// POST: Thêm sản phẩm vào giỏ hàng
router.post("/add", async (req, res) => {
  try {
    const { userId, productId, name, image, price, quantity } = req.body;

    // Tìm giỏ hàng của user
    let bag = await Bag.findOne({ userId });

    if (!bag) {
      // Nếu giỏ hàng chưa tồn tại, tạo mới
      bag = new Bag({
        userId,
        items: [{ productId, name, image, price, quantity }],
      });
    } else {
      // Nếu giỏ hàng đã tồn tại, kiểm tra xem sản phẩm đã có chưa
      const productIndex = bag.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex > -1) {
        // Nếu sản phẩm đã có, cập nhật số lượng
        bag.items[productIndex].quantity += quantity;
      } else {
        // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
        bag.items.push({ productId, name, image, price, quantity });
      }
    }

    await bag.save();
    res.status(200).json({ message: "Product added to bag", bag });
  } catch (error) {
    res.status(500).json({ message: "Error adding product to bag", error });
  }
});

// GET: Lấy giỏ hàng của user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Tìm giỏ hàng theo userId
    const bag = await Bag.findOne({ userId });

    if (!bag) {
      return res.status(200).json({ items: [] }); // Trả về giỏ hàng trống nếu không tìm thấy
    }

    res.status(200).json({ items: bag.items });
  } catch (error) {
    console.error("Error fetching bag:", error.message);
    res.status(500).json({ message: "Error fetching bag", error: error.message });
  }
});

module.exports = router;
