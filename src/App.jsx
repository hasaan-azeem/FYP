import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider, AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Client Layout and Pages
import ClientLayout from "./layouts/ClientLayout";
import Home from "./pages/landing/Home";
import Features from "./pages/landing/Features";
import Aboutus from "./pages/landing/AboutUs";
import Contact from "./pages/landing/Contact";
import Resource from "./pages/landing/Resource";

// Admin Layout and Pages
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Websites from "./pages/admin/Websites";
import Alerts from "./pages/admin/Alerts";
import Vulnerabilities from "./pages/admin/Vulnerabilities";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import HelpSupport from "./pages/admin/HelpSupport";
import ContinousMonitoring from "./pages/admin/ContinousMonitoring";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  const { authLoading } = useContext(AuthContext);

  if (authLoading) {
    return null; // this line KILLS flicker completely
  }

  return (
    // ✅ Wrap everything in AuthProvider
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Routes>
            {/* Client Routes */}
            <Route element={<ClientLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resource />} />

              {/* Auth Routes (No header/sidebar) */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Admin Routes (Protected) */}
            <Route element={<AdminLayout />}>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/websites"
                element={
                  <ProtectedRoute>
                    <Websites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ContinousMonitoring"
                element={
                  <ProtectedRoute>
                    <ContinousMonitoring />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Alerts"
                element={
                  <ProtectedRoute>
                    <Alerts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Vulnerabilities"
                element={
                  <ProtectedRoute>
                    <Vulnerabilities />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/HelpSupport"
                element={
                  <ProtectedRoute>
                    <HelpSupport />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
