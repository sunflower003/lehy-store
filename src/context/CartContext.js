import React, { createContext, useContext, useState } from "react";

// Tạo Context
const CartContext = createContext();

// Hook để truy cập Context dễ dàng hơn
export const useCart = () => useContext(CartContext);

// Provider để quản lý trạng thái giỏ hàng
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Danh sách sản phẩm trong giỏ hàng
  const [cartCount, setCartCount] = useState(0); // Số lượng sản phẩm trong giỏ hàng

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setCartCount((prevCount) => prevCount + 1); // Tăng số lượng sản phẩm
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) {
        setCartCount((prevCount) => prevCount - itemToRemove.quantity); // Giảm số lượng sản phẩm
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
