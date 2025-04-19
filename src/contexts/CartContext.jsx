import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartVisible, setCartVisible] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {    
    setCartVisible(!cartVisible);
    console.log("cartVisible", cartVisible);
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    console.log("Added to cart:", item);
  };

  return (
    <CartContext.Provider
      value={{ cartVisible, toggleCart, addToCart, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
