import React from 'react';
import styles from "../assets/css/Home.module.css";

function GridSection() {
  return (
    <div className={styles["grid-container"]}>
      <div className={`${styles["grid-box"]} ${styles["box-1"]}`}>
        <div className={styles["box-shadow"]} />
        <img src="assets/img/vases.jpg" alt="vases" />
        <p className={styles["name-box"]}>VASES</p>
        <a href="/" className={styles["icon-box"]}>
          <i className="ri-arrow-right-line" />
        </a>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-2"]}`}>
        <div className={styles["box-shadow"]} />
        <img src="assets/img/candles.jpg" alt="candles" />
        <p className={styles["name-box"]}>CANDLES</p>
        <a href="/" className={styles["icon-box"]}>
          <i className="ri-arrow-right-line" />
        </a>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-3"]}`}>
        <div className={styles["box-shadow"]} />
        <img src="assets/img/ceramics.jpg" alt="ceramics" />
        <p className={styles["name-box"]}>CERAMICS</p>
        <a href="/" className={styles["icon-box"]}>
          <i className="ri-arrow-right-line" />
        </a>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-4"]}`}>
        <img src="assets/img/about-us.jpg" alt="about us" />
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-5"]}`}>
        <div className={styles["about-content"]}>
          <h1>ABOUT US</h1>
          <p>
            This store strives to meet all your needs - from elegant tableware
            and tea sets to decorative vases and intricate figurines. Paying
            special attention to the quality of manufacture and unique design,
            our products are carefully selected to offer a diverse assortment
            that meets different tastes and preferences. With secure payment
            options and reliable shipping services, this online store ensures
            that customers receive their chosen ceramic goods safely and
            efficiently, bringing beauty and functionality to their homes.
          </p>
        </div>
        <a href="/" className={`${styles["about-link"]} ${styles["favorites-link"]}`}>
          SHOP NOW
        </a>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-6"]}`}>
        <h1>
          EXCLUSIVE
          <br />
          DESIGN
        </h1>
        <p>
          These are authentic works of art created by masters of their craft.
          Elite tableware differs from the usual in its impeccable execution,
          premium materials, stylish design that goes beyond fashion and
          trends.
        </p>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-7"]}`}>
        <h1>
          HANDMADE
          <br />
          WORK
        </h1>
        <p>
          This is a work done at the highest level, an original author's idea,
          implemented using high-quality professional materials, by a specific
          person - the author of this idea. As a rule, such a product exists in
          a single copy.
        </p>
      </div>
      <div className={`${styles["grid-box"]} ${styles["box-8"]}`}>
        <h1>
          CAREFUL
          <br />
          DELIVERY
        </h1>
        <p>
          We will pack and transport your goods efficiently, and if necessary,
          the courier will deliver it to the entrance and lift it by elevator
          to the desired floor. You have nothing to worry about.
        </p>
      </div>
    </div>
  );
}

export default GridSection;
