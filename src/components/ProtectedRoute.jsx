// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ user, allowedRoles = [] }) {
  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If allowedRoles is provided, restrict access
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
