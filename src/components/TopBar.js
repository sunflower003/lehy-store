import React, { useEffect, useState } from "react";
import styles from "../assets/css/Home.module.css";

const TopBar = () => {
  const messages = [
    "Free shipping for orders over $60",
    "Join our membership for exclusive benefits",
    "Enjoy discounts up to 30% with crypto payment",
    "Shop new arrivals now!",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className={styles["top-bar"]}>
      <div className={styles["top-bar-content"]}>
        <span>{messages[currentMessageIndex]}</span>
      </div>
    </div>
  );
};

export default TopBar;
