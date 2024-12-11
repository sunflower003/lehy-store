import React from "react";
import styles from "../assets/css/Home.module.css";

const FAQ = () => {
  function toggleAnswer(event) {
    const faqItem = event.currentTarget.parentElement; // Get the parent faq-item
    const answer = faqItem.querySelector(`.${styles["faq-answer"]}`);
    const isOpen = answer.classList.contains(styles["open-detail"]);

    // Toggle the answer display with class
    if (isOpen) {
      answer.classList.remove(styles["open-detail"]);
    } else {
      answer.classList.add(styles["open-detail"]);
    }

    // Toggle the open class to rotate the arrow
    faqItem.classList.toggle(styles["open"]);
  }

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles["faq-main-title"]}>FAQ</h1>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>How to place an order in an online store?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            Choose a product on our website. Add it to the cart. Specify your
            details, method, and address of delivery. Pay for the order (the
            final price will be indicated on the payment page). Specify the
            delivery method.
          </p>
        </div>
      </div>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>How much does the delivery cost?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            The delivery cost depends on your location and the shipping method
            chosen. You will see the exact amount during checkout.
          </p>
        </div>
      </div>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>What are the delivery methods?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            We offer standard, expedited, and express delivery options. Please
            choose the one that suits your needs.
          </p>
        </div>
      </div>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>How to use the bonus card?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            You can use your bonus card during checkout. Enter your bonus card
            number to apply discounts.
          </p>
        </div>
      </div>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>How do I find out the availability of goods in the store?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            Check the product page for stock information or contact customer
            service for assistance.
          </p>
        </div>
      </div>
      <div className={styles["faq-item"]}>
        <div className={styles["faq-question"]} onClick={toggleAnswer}>
          <h2>How to exchange or return the goods?</h2>
          <i className="ri-arrow-down-s-line" />
        </div>
        <div className={styles["faq-answer"]}>
          <p>
            To return or exchange a product, please contact customer service
            within 30 days of receiving the item.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
