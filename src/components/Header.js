import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="nav-links">
        <ul>
          <li>
            <a href="/collection" className="link">Collection</a>
          </li>
          <li className="dropdown">
            <a href="/shop" className="link">Shop</a>
            <ul className="dropdown-menu">
              <li><a href="/shop/vase">Vase</a></li>
              <li><a href="/shop/candle">Candle</a></li>
              <li><a href="/shop/mug">Mug</a></li>
              <li><a href="/shop/diffuser">Diffuser</a></li>
            </ul>
          </li>
          <li>
            <a href="/about" className="link">About</a>
          </li>
        </ul>
      </div>
      <a href="/" className="logo">LEHY</a>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/wishlist" className="link">Wishlist</a>
          </li>
          <li>
            <a href="/login" className="link">Login</a>
          </li>
          <li className="dropdown">
  <a href="?" className="link">
    Bag
  </a>
  <div className="cart-dropdown">
    <div className="cart-header">
      <h3>Bag</h3>
    </div>
    <div className="cart-item">
      <img src="assets/img/product1.jpg" alt="Product" />
      <div className="cart-details">
        <p className="cart-product-name">Botanical Garden</p>
        <p className="cart-product-weight">200g</p>
        <p className="cart-product-price">$80</p>
        <div className="cart-actions">
          <span className="cart-quantity">Quantity: 1</span>
          <a href="?" className="cart-remove">
            Delete
          </a>
        </div>
      </div>
    </div>
    <div className="cart-item">
      <img src="assets/img/product3.jpg" alt="Product" />
      <div className="cart-details">
        <p className="cart-product-name">Handmade mug</p>
        <p className="cart-product-weight">200g</p>
        <p className="cart-product-price">$50</p>
        <div className="cart-actions">
          <span className="cart-quantity">Quantity: 1</span>
          <a href="/" className="cart-remove">
            Delete
          </a>
        </div>
      </div>
    </div>
    <div className="view-cart-section">
      <a href="/" className="view-cart-link">
        View Bag [2]
      </a>
    </div>
    <div className="cart-footer">
      <div className="cart-total">
        <span>Total cost:</span>
        <span>$130</span>
      </div>
      <button className="checkout-button">Pay</button>
    </div>
  </div>
</li>

        </ul>
      </div>
    </header>
  );
};

export default Header;
