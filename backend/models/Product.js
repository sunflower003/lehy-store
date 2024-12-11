const mongoose = require("mongoose");

// Schema cho Product
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tên sản phẩm, bắt buộc
  price: { type: String, required: true }, // Giá sản phẩm, bắt buộc
  weight: { type: String }, // Khối lượng sản phẩm
  image: { type: String }, // Hình ảnh sản phẩm
  isOutOfStock: { type: Boolean, default: false }, // Trạng thái còn hàng
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" }, // Tham chiếu tới category
});

// Xuất mô hình Product
module.exports = mongoose.model("product", ProductSchema);
