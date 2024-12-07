// src/components/HomeSection.js
import React from "react";

const HomeSection = () => {
  return (
    <div
      className="home-container"
      id="home"
      style={{
        backgroundImage: "url('assets/img/heading.jpg')",
      }}
    >
      <div className="home-shadow"></div>
      <div className="home-content">
        <h1 className="main-content">PRODUCTS FOR THE SOUL</h1>
        <p className="sub-content">Breathing new life into cultural craft</p>
        <a href="/shop" className="button-content">
          Shop now
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
