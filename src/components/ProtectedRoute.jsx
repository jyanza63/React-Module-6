import ProtectedRoute from "./components/ProtectedRoute";

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

