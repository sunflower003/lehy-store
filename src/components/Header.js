import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Home.module.css";

const Header = ({ textColor = "white" }) => {
  const { cartItems, cartCount, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // Tính tổng giá tiền
  const totalCost = cartItems.reduce((total, item) => {
    const cleanedPrice = typeof item.price === "string"
      ? parseFloat(item.price.replace(/[,₫]/g, ""))
      : item.price;
    return total + cleanedPrice * item.quantity;
  }, 0);

  return (
    <header className={styles.header} id="header">
      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <a href="/collection" className={styles.link} style={{ color: textColor }}>
              Collection
            </a>
          </li>
          <li>
            <a href="/shop" className={styles.link} style={{ color: textColor }}>
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className={styles.link} style={{ color: textColor }}>
              About
            </a>
          </li>
        </ul>
      </div>

      <a href="/" className={styles.logo} style={{ color: textColor }}>
        LEHY
      </a>

      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <a href="/wishlist" className={styles.link} style={{ color: textColor }}>
              Wishlist
            </a>
          </li>
          <li>
            <a href="/login" className={styles.link} style={{ color: textColor }}>
              Login
            </a>
          </li>

          {/* Bag Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <a href="/" className={styles.link} style={{ color: textColor }}>
              Bag
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </a>
            {isCartOpen && (
              <div className={styles["cart-dropdown"]}>
                <div className={styles["cart-header"]}>
                  <h3>Giỏ hàng [{cartItems.length}]</h3>
                  <p>MIỄN PHÍ GÓI QUÀ VỚI MỌI ĐƠN ĐẶT HÀNG</p>
                </div>

                {/* Danh sách sản phẩm */}
                <div className={styles["cart-items-container"]}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles["cart-item"]}>
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
                <div className={styles["cart-footer"]}>
                  <div className={styles.orderSummary}>
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
                  </div>
                  <button
                    className={styles.checkoutButton}
                    onClick={() => navigate("/cart")} // Điều hướng tới trang thanh toán
                  >
                    Thanh toán đơn hàng
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;