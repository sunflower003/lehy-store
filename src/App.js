import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ProductSection from "./components/ProductSection";
import GridSection from "./components/GridSection";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import Subscription from "./components/Subscriptions";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import "./assets/css/main.css";
import "./assets/css/home.css";


const App = () => {
  return (
    <body>
      <TopBar />
      <Header />
      <main>
        <HomeSection />
        <ProductSection />
        <GridSection />
        <FAQ />
        <Articles />
        <Subscription />
        <Footer />
        <Copyright />
      </main>
      <Feedback />
    </body>
  );
};

export default App;
