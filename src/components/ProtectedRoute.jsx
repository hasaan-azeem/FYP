// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { user, authLoading } = useContext(AuthContext);

//   if (authLoading) {
//     return null; // ya loader
//   }

//   if (!user) {
//     return <Navigate to="/auth/dashboard/login" replace />;
//   }

//   return children;
// }
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

// Protected Route Component
export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  // Show loading spinner while checking auth
  if (loading) {
    return <LoadingSpinner />;
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/auth/dashboard/login" replace />;
  }

  // User is authenticated, render the protected content
  return children;
}
