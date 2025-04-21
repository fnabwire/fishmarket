import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImpactDiaagram from "../components/ImpactDiagram";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import { CartContext } from "../contexts/CartContext";
// import { CSSTransition } from "react-transition-group";
// import '../CartCardAnimation.css'
import CartContainer from "../components/CartContainer";
export default function HomePage() {
  const { cartVisible } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      {cartVisible ? (
        <CartContainer />
      ) : 
      null}
      <HeroSection />
      <ImpactDiaagram />
      <Featured />
      <Footer />
    </div>
  );
}
