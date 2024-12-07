import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="form-section">
        <div className="header">
          <span className="dot"></span> Lehy
        </div>
        <h1>Welcome Back to LehyStore</h1>
        <p>Login to explore and enjoy exclusive deals.</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <div className="footer">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
      <div className="image-section" style={{ backgroundImage: `url('./assets/img/login.jpg')` }}>
        <div className="box-shadow"></div>
        <div className="quote">
          <p>“Shopping made easier with LehyStore.”</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
