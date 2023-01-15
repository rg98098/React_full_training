import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**
       * Header
          - Logo
          - Nav items(right side)
          - Cart
        Body
          - Search bar
          - RestaurantCardl
              - Image
              - Name
              - Rating
              - Cusines
        Footer 
          - Links
          - Copyrights
       */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
