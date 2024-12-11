import React from "react";
import styles from "../assets/css/Home.module.css";

function Copyright() {
  return (
    <div className={styles.copyright}>
      <span>
        <i className="ri-copyright-line" />
        2025 Lehy, Inc. All rights reserved.
      </span>
      <div className={styles["social-media"]}>
        <a
          href="https://www.facebook.com/profile.php?id=100067946025382"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`ri-facebook-circle-fill ${styles.icon}`} />
        </a>
        <a
          href="https://www.instagram.com/_lehyyyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`ri-instagram-line ${styles.icon}`} />
        </a>
        <a
          href="https://dribbble.com/lehyyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`ri-dribbble-line ${styles.icon}`} />
        </a>
      </div>
    </div>
  );
}

export default Copyright;
