const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên danh mục, bắt buộc
});

module.exports = mongoose.model("Category", CategorySchema);
