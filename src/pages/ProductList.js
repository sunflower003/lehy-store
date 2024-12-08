import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ProductListing from "../components/ProductListing";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const ProductList = () => {
  return (
    <>
      <TopBar />
      <Header textColor="black" />
      <ProductListing />
      <Footer />
      <Copyright />
      <Feedback />
    </>
  );
};

export default ProductList;
