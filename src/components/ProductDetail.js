import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import styles from "../assets/css/ProductDetail.module.css";

const products = [
    {
      id: 1,
      name: "Basil & Neroli Home Candle",
      price: "2,100.00₫",
      weight: "200g",
      image: "assets/img/product1.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    },
    {
      id: 2,
      name: "Blackberry & Bay Home Candle",
      price: "1,025.00₫",
      weight: "65g",
      image: "assets/img/product2.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    },
    {
      id: 3,
      name: "Dark Amber & Ginger Lily Home Candle",
      price: "2,600.00₫",
      weight: "200g",
      image: "assets/img/product3.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    },
    {
      id: 4,
      name: "English Pear & Freesia Home Candle",
      price: "1,025.00₫",
      weight: "60g",
      image: "assets/img/product1.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    },
    {
      id: 5,
      name: "English Pear & Freesia Home Candle",
      price: "1,025.00₫",
      weight: "60g",
      image: "assets/img/product2.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    },{
      id: 6,
      name: "English Pear & Freesia Home Candle",
      price: "1,025.00₫",
      weight: "60g",
      image: "assets/img/product3.jpg",
      description:
      "A sophisticated floral scent with a twist of fresh basil and neroli."
    }
  ];

const ProductDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const { addToCart } = useCart();
    const product = products.find((item) => item.id === parseInt(id)); // Tìm sản phẩm theo ID

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className={styles["product-page"]}>
          <div className={styles["product-container"]}>
            {/* Product Image */}
            <div className={styles["product-image"]}>
              <img 
                src={product.image} 
                alt={product.name} 
              />
            </div>
    
            {/* Product Details */}
            <div className={styles["product-details"]}>
              <h1 className={styles["product-title"]}>{product.name}</h1>
              <a href="#reviews" className={styles["review-link"]}>
                Be the first to write a review
                </a>
              <p className={styles["price"]}>{product.price}</p>
              <p className={styles["description"]}>{product.description}</p>
              <div className={styles["weight-selector"]}>
                    <button className={styles["weight-btn"]}>{product.weight}</button>
                </div>
              
              {/* Add to Bag */}
              <button
                className={styles["add-to-bag"]}
                onClick={() => addToCart(product)}>
                    Add To Bag
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductDetail;
    