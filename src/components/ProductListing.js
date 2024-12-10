import React from "react";
import styles from "../assets/css/ProductList.module.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basil & Neroli Home Candle",
    price: "2,100.00₫",
    weight: "200g",
    image: "assets/img/product1.jpg",
    isOutOfStock: false,
  },
  {
    id: 2,
    name: "Blackberry & Bay Home Candle",
    price: "1,025.00₫",
    weight: "65g",
    image: "assets/img/product2.jpg",
    isOutOfStock: true,
  },
  {
    id: 3,
    name: "Dark Amber & Ginger Lily Home Candle",
    price: "2,600.00₫",
    weight: "200g",
    image: "assets/img/product3.jpg",
    isOutOfStock: false,
  },
  {
    id: 4,
    name: "English Pear & Freesia Home Candle",
    price: "1,025.00₫",
    weight: "60g",
    image: "assets/img/product1.jpg",
    isOutOfStock: false,
  },
  {
    id: 5,
    name: "English Pear & Freesia Home Candle",
    price: "1,025.00₫",
    weight: "60g",
    image: "assets/img/product2.jpg",
    isOutOfStock: true,
  },{
    id: 6,
    name: "English Pear & Freesia Home Candle",
    price: "1,025.00₫",
    weight: "60g",
    image: "assets/img/product3.jpg",
    isOutOfStock: true,
  }
  
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleAddToCart = () => {
    navigate(`/product/${product.id}`); // Điều hướng tới trang ProductDetail với ID sản phẩm
  };

  return (
    <div className={styles.pl_productCard}>
      <div className={styles.pl_productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.pl_productInfo}>
        <h2 className={styles.pl_productName}>{product.name}</h2>
        <p className={styles.pl_productPrice}>
          {product.price} {product.weight}
        </p>
        {product.isOutOfStock ? (
          <button className={styles.pl_outOfStockButton}>
            Temporarily Out of Stock
          </button>
        ) : (
          <button
            className={styles.pl_addToCartButton}
            onClick={handleAddToCart} // Gọi hàm khi bấm nút
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

const ProductListing = () => (
  <div className={styles.pl_productListingPage}>
    <header className={styles.pl_productListingHeader}>
      <h1>Home Candles</h1>
      <p className={styles.pl_productListingDescription}>
        Each Home Candle (200g) is lovingly crafted by hand in England's rolling
        South Downs. Add an air of luxury to any room, encased in our timeless
        and iconic cream and black design.
      </p>
    </header>

    <div className={styles.pl_productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductListing;