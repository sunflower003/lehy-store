import React from "react";
import styles from "../assets/css/Home.module.css";

const ProductSection = () => {
  return (
    <div className={styles["product-container"]}>
      <div className={`${styles["card-product"]} ${styles["favorites-card"]}`}>
        <div className={styles["text-favorites"]}>
          <h2>FAVORITES</h2>
          <p>We have made a selection of our customers' favorite products</p>
        </div>
        <a href="/" className={styles["favorites-link"]}>
          SEE ALL
        </a>
      </div>
      <div className={styles["card-product"]}>
        <a href="/" className={styles["product-link"]}>
          <span className={`${styles["tag"]} ${styles["new-tag"]}`}>NEW!</span>
          <span className={styles["tag"]} />
          <img src="assets/img/product1.jpg" alt="Botanical Garden" />
          <div className={styles["card-bottom"]}>
            <div className={styles["infor-product"]}>
              <p className={styles["name-product"]}>Botanical Garden</p>
              <p className={styles["price-product"]}>$87</p>
            </div>
            <i className={`ri-shopping-bag-line ${styles.ic}`} />
          </div>
        </a>
      </div>
      <div className={styles["card-product"]}>
        <a href="/" className={styles["product-link"]}>
          <img src="assets/img/product2.jpg" alt="Aromatic diffuser" />
          <div className={styles["card-bottom"]}>
            <div className={styles["infor-product"]}>
              <p className={styles["name-product"]}>Aromatic diffuser</p>
              <p className={styles["price-product"]}>$65</p>
            </div>
            <i className={`ri-shopping-bag-line ${styles.ic}`} />
          </div>
        </a>
      </div>
      <div className={styles["card-product"]}>
        <a href="/" className={styles["product-link"]}>
          <span className={`${styles["tag"]} ${styles["popular-tag"]}`}>
            POPULAR
          </span>
          <span className={styles["tag"]} />
          <img src="assets/img/product3.jpg" alt="Handmade mug" />
          <div className={styles["card-bottom"]}>
            <div className={styles["infor-product"]}>
              <p className={styles["name-product"]}>Handmade mug</p>
              <p className={styles["price-product"]}>$40</p>
            </div>
            <i className={`ri-shopping-bag-line ${styles.ic}`} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductSection;
