import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import CartDetail from "../components/CartDetail";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const CartDt = () => {
  return (
    <>
      <TopBar />
      <Header textColor="black" />
      <CartDetail />
      <Footer />
      <Copyright />
      <Feedback />
    </>
  );
};

export default CartDt;
