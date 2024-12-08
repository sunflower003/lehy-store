import React from "react";
import styles from "../assets/css/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <a href="/collection" className={styles.link}>Collection</a>
          </li>
          <li className={styles.dropdown}>
            <a href="/shop" className={styles.link}>Shop</a>
            <ul className={styles["dropdown-menu"]}>
              <li><a href="/shop/vase">Vase</a></li>
              <li><a href="/shop/candle">Candle</a></li>
              <li><a href="/shop/mug">Mug</a></li>
              <li><a href="/shop/diffuser">Diffuser</a></li>
            </ul>
          </li>
          <li>
            <a href="/about" className={styles.link}>About</a>
          </li>
        </ul>
      </div>
      <a href="/" className={styles.logo}>LEHY</a>
      <div className={styles["nav-links"]}>
        <ul>
          <li>
            <a href="/wishlist" className={styles.link}>Wishlist</a>
          </li>
          <li>
            <a href="/login" className={styles.link}>Login</a>
          </li>
          <li className={styles.dropdown}>
            <a href="?" className={styles.link}>Bag</a>
            <div className={styles["cart-dropdown"]}>
              <div className={styles["cart-header"]}>
                <h3>Bag</h3>
              </div>
              <div className={styles["cart-item"]}>
                <img src="assets/img/product1.jpg" alt="Product" />
                <div className={styles["cart-details"]}>
                  <p className={styles["cart-product-name"]}>Botanical Garden</p>
                  <p className={styles["cart-product-weight"]}>200g</p>
                  <p className={styles["cart-product-price"]}>$80</p>
                  <div className={styles["cart-actions"]}>
                    <span className={styles["cart-quantity"]}>Quantity: 1</span>
                    <a href="?" className={styles["cart-remove"]}>
                      Delete
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["cart-item"]}>
                <img src="assets/img/product3.jpg" alt="Product" />
                <div className={styles["cart-details"]}>
                  <p className={styles["cart-product-name"]}>Handmade mug</p>
                  <p className={styles["cart-product-weight"]}>200g</p>
                  <p className={styles["cart-product-price"]}>$50</p>
                  <div className={styles["cart-actions"]}>
                    <span className={styles["cart-quantity"]}>Quantity: 1</span>
                    <a href="/" className={styles["cart-remove"]}>
                      Delete
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["view-cart-section"]}>
                <a href="/" className={styles["view-cart-link"]}>
                  View Bag [2]
                </a>
              </div>
              <div className={styles["cart-footer"]}>
                <div className={styles["cart-total"]}>
                  <span>Total cost:</span>
                  <span>$130</span>
                </div>
                <button className={styles["checkout-button"]}>Pay</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
