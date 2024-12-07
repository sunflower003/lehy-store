import React from "react";

const ProductSection = () => {
  return (
    <div className="product-container">
      <div className="card-product favorites-card">
        <div className="text-favorites">
          <h2>FAVORITES</h2>
          <p>We have made a selection of our customers' favorite products</p>
        </div>
        <a href="/" className="favorites-link">
          SEE ALL
        </a>
      </div>
      <div className="card-product">
        <a href="/" className="product-link">
          <span className="tag new-tag">NEW!</span>
          <span className="tag" />
          <img src="assets/img/product1.jpg" alt="" />
          <div className="card-bottom">
            <div className="infor-product">
              <p className="name-product">Botanical Garden</p>
              <p className="price-product">$87</p>
            </div>
            <i className="ri-shopping-bag-line" />
          </div>
        </a>
      </div>
      <div className="card-product">
        <a href="/" className="product-link">
          <img src="assets/img/product2.jpg" alt="" />
          <div className="card-bottom">
            <div className="infor-product">
              <p className="name-product">Aromatic diffuser</p>
              <p className="price-product">$65</p>
            </div>
            <i className="ri-shopping-bag-line" />
          </div>
        </a>
      </div>
      <div className="card-product">
        <a href="/" className="product-link">
          <span className="tag popular-tag">POPULAR</span>
          <span className="tag" />
          <img src="assets/img/product3.jpg" alt="" />
          <div className="card-bottom">
            <div className="infor-product">
              <p className="name-product">Handmade mug</p>
              <p className="price-product">$40</p>
            </div>
            <i className="ri-shopping-bag-line" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductSection;
