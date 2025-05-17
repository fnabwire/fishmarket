import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { FishListProvider } from "./contexts/FishListContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      <FishListProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FishListProvider>
    </StrictMode>
  </BrowserRouter>
);
