const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Category = require("../models/Category"); // Import nếu cần kiểm tra danh mục

// API: Thêm Product
router.post("/", async (req, res) => {
  try {
    const { name, price, weight, image, isOutOfStock, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).send("Tên, giá và danh mục là bắt buộc");
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).send("Danh mục không tồn tại");
    }

    const newProduct = new Product({
      name,
      price,
      weight,
      image,
      isOutOfStock,
      category,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send("Lỗi khi thêm sản phẩm: " + err.message);
  }
});

// API: Lấy danh sách Product
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const products = await Product.find()
      .populate("category", "name") // Chỉ lấy trường name của category
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(products);
  } catch (err) {
    res.status(500).send("Lỗi khi lấy sản phẩm: " + err.message);
  }
});

// API: Lấy thông tin Product cụ thể
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name"
    );

    if (!product) {
      return res.status(404).send("Sản phẩm không tồn tại");
    }

    res.json(product);
  } catch (err) {
    res.status(500).send("Lỗi khi lấy thông tin sản phẩm: " + err.message);
  }
});

// API: Sửa Product
router.put("/:id", async (req, res) => {
  try {
    const { name, price, weight, image, isOutOfStock, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, weight, image, isOutOfStock, category },
      { new: true } // Trả về document đã được cập nhật
    );

    if (!updatedProduct) {
      return res.status(404).send("Sản phẩm không tồn tại");
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).send("Lỗi khi sửa sản phẩm: " + err.message);
  }
});

// API: Xóa Product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).send("Sản phẩm không tồn tại");
    }

    res.send("Xóa sản phẩm thành công");
  } catch (err) {
    res.status(500).send("Lỗi khi xóa sản phẩm: " + err.message);
  }
});

module.exports = router;
