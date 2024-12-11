import React from 'react';
import styles from "../assets/css/Home.module.css";

function Subscription() {
  return (
    <div
      className={styles["subscription-container"]}
      style={{ backgroundImage: 'url("assets/img/sign-up.jpg")' }}
    >
      <div className={styles["box-shadow"]} />
      <h2>EXCLUSIVE NEWS &amp; CONTENT</h2>
      <p>
        Subscribe to our newsletter to keep up to date with all the events of the
        service
      </p>
      <div className={styles["subscription-form"]}>
        <input type="email" placeholder="Email address" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Subscription;
