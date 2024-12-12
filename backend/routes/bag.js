const express = require("express");
const router = express.Router();
const Bag = require("../models/Bag");

// Lấy giỏ hàng theo userId
router.get("/:userId", async (req, res) => {
  try {
    const bag = await Bag.findOne({ userId: req.params.userId }).populate("items.productId");
    if (!bag) {
      return res.status(404).json({ message: "Bag not found" });
    }
    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Thêm sản phẩm vào giỏ hàng
router.post("/:userId/add", async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let bag = await Bag.findOne({ userId: req.params.userId });

    // Nếu chưa có giỏ hàng, tạo mới
    if (!bag) {
      bag = new Bag({
        userId: req.params.userId,
        items: [{ productId, quantity }],
      });
    } else {
      // Kiểm tra nếu sản phẩm đã tồn tại
      const itemIndex = bag.items.findIndex((item) => item.productId.toString() === productId);

      if (itemIndex > -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        bag.items[itemIndex].quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới
        bag.items.push({ productId, quantity });
      }
    }

    bag.updatedAt = new Date(); // Cập nhật thời gian
    await bag.save();
    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Xóa sản phẩm khỏi giỏ hàng
router.delete("/:userId/remove/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const bag = await Bag.findOne({ userId });

    if (!bag) {
      return res.status(404).json({ message: "Bag not found" });
    }

    // Loại bỏ sản phẩm khỏi giỏ hàng
    bag.items = bag.items.filter((item) => item.productId.toString() !== productId);
    bag.updatedAt = new Date(); // Cập nhật thời gian
    await bag.save();

    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
