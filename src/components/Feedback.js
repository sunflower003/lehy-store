import React from 'react';
import styles from "../assets/css/Home.module.css";

function Feedback() {
  function openFeedback() {
    document.getElementById('feedbackPanel').classList.add(styles.open);
    document.querySelector(`.${styles["feedback-button"]}`).classList.add(styles.hidden); // Ẩn thanh feedback nhỏ
  }

  function closeFeedback() {
    document.getElementById('feedbackPanel').classList.remove(styles.open);
    document.querySelector(`.${styles["feedback-button"]}`).classList.remove(styles.hidden); // Hiện thanh feedback nhỏ lại
  }

  function submitFeedback() {
    const rating = document.getElementById('recommendation').value;
    alert(`Thank you for your feedback! You rated us: ${rating}/10`);
    closeFeedback();
    // Bạn có thể thêm hàm gửi dữ liệu feedback đến server tại đây.
  }

  return (
    <>
      <div className={styles["feedback-button"]} onClick={openFeedback}>
        FEEDBACK
      </div>
      <div className={styles["feedback-panel"]} id="feedbackPanel">
        <div className={styles["feedback-content"]}>
          <h2>Your Experience</h2>
          <p>Please share your thoughts with us, whether good or bad.</p>
          <label htmlFor="recommendation">
            How likely are you to recommend our site?
          </label>
          <input
            type="range"
            id="recommendation"
            name="recommendation"
            min={0}
            max={10}
          />
          <button onClick={submitFeedback}>Submit</button>
          <button onClick={closeFeedback}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Feedback;
