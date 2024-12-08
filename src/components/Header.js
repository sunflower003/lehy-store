import React, { useState } from "react";
import styles from "../assets/css/Home.module.css";

const Header = ({ textColor = "white" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className={styles.header} id="header">
      <div className={styles["nav-links"]}>
        <ul>
          {/* Collection Link */}
          <li>
            <a href="/collection" className={styles.link} style={{ color: textColor }}>
              Collection
            </a>
          </li>

          {/* Shop Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="/shop" className={styles.link} style={{ color: textColor }}>
              Shop
            </a>
            {isDropdownOpen && (
              <ul className={styles["dropdown-menu"]}>
                <li><a href="/shop/vase" className={styles.dropdownLink}>Vase</a></li>
                <li><a href="/shop/candle" className={styles.dropdownLink}>Candle</a></li>
                <li><a href="/shop/mug" className={styles.dropdownLink}>Mug</a></li>
                <li><a href="/shop/diffuser" className={styles.dropdownLink}>Diffuser</a></li>
              </ul>
            )}
          </li>

          {/* About Link */}
          <li>
            <a href="/about" className={styles.link} style={{ color: textColor }}>
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <a href="/" className={styles.logo} style={{ color: textColor }}>
        LEHY
      </a>

      <div className={styles["nav-links"]}>
        <ul>
          {/* Wishlist Link */}
          <li>
            <a href="/wishlist" className={styles.link} style={{ color: textColor }}>
              Wishlist
            </a>
          </li>

          {/* Login Link */}
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
            </a>
            {isCartOpen && (
              <div className={styles["cart-dropdown"]}>
                <div className={styles["cart-header"]}>
                  <h3>Bag</h3>
                </div>

                {/* First Cart Item */}
                <div className={styles["cart-item"]}>
                  <img src="assets/img/product1.jpg" alt="Product" />
                  <div className={styles["cart-details"]}>
                    <p className={styles["cart-product-name"]}>Botanical Garden</p>
                    <p className={styles["cart-product-weight"]}>200g</p>
                    <p className={styles["cart-product-price"]}>$80</p>
                    <div className={styles["cart-actions"]}>
                      <span className={styles["cart-quantity"]}>Quantity: 1</span>
                      <button className={styles["cart-remove"]}>Delete</button>
                    </div>
                  </div>
                </div>

                {/* Second Cart Item */}
                <div className={styles["cart-item"]}>
                  <img src="assets/img/product3.jpg" alt="Product" />
                  <div className={styles["cart-details"]}>
                    <p className={styles["cart-product-name"]}>Handmade mug</p>
                    <p className={styles["cart-product-weight"]}>200g</p>
                    <p className={styles["cart-product-price"]}>$50</p>
                    <div className={styles["cart-actions"]}>
                      <span className={styles["cart-quantity"]}>Quantity: 1</span>
                      <button className={styles["cart-remove"]}>Delete</button>
                    </div>
                  </div>
                </div>

                {/* View Bag Section */}
                <div className={styles["view-cart-section"]}>
                  <a href="/cart" className={styles["view-cart-link"]}>
                    View Bag [2]
                  </a>
                </div>

                {/* Cart Footer */}
                <div className={styles["cart-footer"]}>
                  <div className={styles["cart-total"]}>
                    <span>Total cost:</span>
                    <span>$130</span>
                  </div>
                  <button className={styles["checkout-button"]}>Pay</button>
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
