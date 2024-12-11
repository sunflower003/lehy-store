const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// API: Thêm danh mục
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Tên danh mục là bắt buộc" });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi thêm danh mục: " + err.message });
  }
});

// API: Lấy danh sách danh mục
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách danh mục: " + err.message });
  }
});

// API: Cập nhật danh mục
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Tên danh mục là bắt buộc" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true } // Trả về document đã được cập nhật
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Danh mục không tồn tại" });
    }

    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi cập nhật danh mục: " + err.message });
  }
});

// API: Xóa danh mục
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Danh mục không tồn tại" });
    }

    res.json({ message: "Xóa danh mục thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi xóa danh mục: " + err.message });
  }
});

module.exports = router;