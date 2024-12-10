import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import Home from "./pages/Home";
import Login from "./pages/Login"
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ProductDt from "./pages/ProductDt";
import CartDetail from "./components/CartDetail";
import CartDt from "./pages/CartDt";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDt/>} />
          <Route path="/cart" element={<CartDt />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
