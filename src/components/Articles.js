import React from "react";
import styles from "../assets/css/Home.module.css";

function Articles() {
  return (
    <div className={styles["article-container"]}>
      <div className={styles["article-box"]}>
        <div className={styles["article-card"]}>
          {/* Updated alt attribute */}
          <img src="assets/img/article-1.jpg" alt="Incense fragrances" />
          <div className={styles["article-content"]}>
            <h3>The story of how our famous incense fragrances are created</h3>
            <p>5K views • 12 hours ago</p>
          </div>
        </div>
        <div className={styles["article-card"]}>
          {/* Updated alt attribute */}
          <img src="assets/img/article-2.jpg" alt="Natural aroma candles" />
          <div className={styles["article-content"]}>
            <h3>Natural ingredients for the manufacture of aroma candles</h3>
            <p>3K views • 1 day ago</p>
          </div>
        </div>
      </div>
      <a href="/" className={styles["article-button"]}>
        All articles
      </a>
    </div>
  );
}

export default Articles;
