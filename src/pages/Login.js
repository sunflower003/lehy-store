import React from "react";
import styles from "../assets/css/Login.module.css";

function Login() {
  return (
    <div className={styles["lg_container"]}>
      <div className={styles["lg_form-section"]}>
        <div className={styles["lg_header"]}>
          <span className={styles["lg_dot"]} /> Lehy
        </div>
        <h1 className={styles["lg_h1"]}>Welcome Back to LehyStore</h1>
        <p className={styles["lg_p"]}>Login to explore and enjoy exclusive deals.</p>
        <form className={styles["lg_form"]}>
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button type="submit" className={styles["lg_button"]}>Login</button>
          <div className={styles["lg_footer"]}>
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
      <div
        className={styles["lg_image-section"]}
        style={{ backgroundImage: 'url("assets/img/login.jpg")' }}
      >
        <div className={styles["lg_box-shadow"]} />
        <div className={styles["lg_quote"]}>
          <p>“Shopping made easier with LehyStore.”</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
