import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import FishListingsPage from "./pages/FishListingsPage";
import AboutPage from "./pages/AboutPage";
import BuyerDashboardPage from "./pages/BuyerDashboardPage";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import FisherManDashboardPage from "./pages/FisherManDashboardPage";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user ?? null);
    };
    getUser();
  }, []);

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Public routes */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/fish-listings" element={<FishListingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            element={
              <ProtectedRoute user={user} allowedRoles={["fisherman"]} />
            }
          >
            <Route
              path="/fisherman-dashboard"
              element={<FisherManDashboardPage user={user} />}
            />
          </Route>
          {/* Protected Routes for Buyer */}
          <Route
            element={<ProtectedRoute user={user} allowedRoles={["buyer"]} />}
          >
            <Route
              path="/buyer-dashboard"
              element={<BuyerDashboardPage user={user} />}
            />
          </Route>
          {/* Protected Routes for Admin */}
          <Route
            element={<ProtectedRoute user={user} allowedRoles={["admin"]} />}
          >
            <Route
              path="/admin-dashboard"
              element={<AdminDashboardPage user={user} />}
            />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
