import React from "react";
import { useCart } from "../context/CartContext"; // Import CartContext
import styles from "../assets/css/CartDetail.module.css"; // Import CSS

const CartDetail = () => {
  const { cartItems, removeFromCart } = useCart();

  // Tính tổng tiền
  const totalCost = cartItems.reduce((total, item) => {
    const cleanedPrice = typeof item.price === "string"
      ? parseFloat(item.price.replace(/[,₫]/g, ""))
      : item.price;
    return total + cleanedPrice * item.quantity;
  }, 0);

  return (
    <div className={styles.cartPage}>
      <h1>Giỏ hàng [{cartItems.length}]</h1>
      <p>MIỄN PHÍ GÓI QUÀ VỚI MỌI ĐƠN ĐẶT HÀNG</p>
      <div className={styles.cartContent}>
        {/* Danh sách sản phẩm */}
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemWeight}>Kích thước: {item.weight}</p>
                <p className={styles.itemPrice}>{item.price}</p>
                <div className={styles.itemActions}>
                  <span>Số lượng: {item.quantity}</span>
                  <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chi tiết đơn hàng */}
        <div className={styles.orderSummary}>
          <h2>Chi tiết đơn hàng</h2>
          <div className={styles.summaryRow}>
            <span>Tổng tiền hàng:</span>
            <span>{totalCost.toLocaleString()}₫</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Gói quà:</span>
            <span>Miễn phí</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Phí vận chuyển:</span>
            <span>Miễn phí</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Tổng thanh toán:</span>
            <span>{totalCost.toLocaleString()}₫</span>
          </div>
          <button className={styles.checkoutButton}>Thanh toán đơn hàng</button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
