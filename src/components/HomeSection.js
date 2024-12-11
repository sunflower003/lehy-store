import React from "react";
import styles from "../assets/css/Home.module.css";

const HomeSection = () => {
  return (
    <div
      className={styles["home-container"]}
      id="home"
      style={{
        backgroundImage: "url('assets/img/heading.jpg')",
      }}
    >
      <div className={styles["home-shadow"]}></div>
      <div className={styles["home-content"]}>
        <h1 className={styles["main-content"]}>PRODUCTS FOR THE SOUL</h1>
        <p className={styles["sub-content"]}>Breathing new life into cultural craft</p>
        <a href="/shop" className={styles["button-content"]}>
          Shop now
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
