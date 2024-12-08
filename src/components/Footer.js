import React from 'react';
import styles from "../assets/css/Home.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-section"]}>
        <h3>SERVICE</h3>
        <ul>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Our Story</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h3>COMPANY</h3>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Partners</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h3>LEGAL</h3>
        <ul>
          <li>
            <a href="/">Claim</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
