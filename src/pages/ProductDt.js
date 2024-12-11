import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const ProductDt = () => {
  return (
    <>
      <TopBar />
      <Header textColor="black" />
      <ProductDetail />
      <Footer />
      <Copyright />
      <Feedback />
    </>
  );
};

export default ProductDt;
