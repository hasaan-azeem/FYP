import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return null; // ya loader
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
