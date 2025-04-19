import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImpactDiaagram from "../components/ImpactDiagram";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import CartCard from "../components/Cart";
import { CartContext } from "../contexts/CartContext";
import { CSSTransition } from "react-transition-group";
import '../CartCardAnimation.css'  
import CartContainer from "../components/CartContainer";
function HomePage() {
  const { cartVisible } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      {cartVisible ? (
        <CSSTransition
          in={cartVisible}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <CartContainer/>
        </CSSTransition>
      ) : null}
      <HeroSection />
      <ImpactDiaagram />
      <Featured />
      <Footer />
    </div>
  );
}

export default HomePage;
