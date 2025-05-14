import CartContainer from "../components/CartContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function AdminDashboardPage() {
  const { cartVisible } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      {cartVisible ? <CartContainer /> : null}
      <h1 className="text-3xl font-bold my-6">Welcome to admin Dashboard</h1>
      <Footer />
    </div>
  );
}
