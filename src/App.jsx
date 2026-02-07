import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
// Context
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { authLoading } = useContext(AuthContext);

  if (authLoading) {
    return null; // this line KILLS flicker completely
  }

  return (
    // ✅ Wrap everything in AuthProvider

    <BrowserRouter>
      <ReactLenis
        root
        options={{
          lerp: 0.1, // Smooth factor
          duration: 1.2, // Animation duration
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false, // Keep mobile touch normal
          touchMultiplier: 2,
        }}
      >
        <ScrollToTop />

        <Routes>
          {/* Client Routes */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resource />} />

            {/* Auth Routes (No header/sidebar) */}
            <Route path="/auth/dashboard/login" element={<Login />} />
            <Route path="/auth/dashboard/signup" element={<Signup />} />
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
              path="/dashboard/websites"
              element={
                <ProtectedRoute>
                  <Websites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/ContinousMonitoring"
              element={
                <ProtectedRoute>
                  <ContinousMonitoring />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/Alerts"
              element={
                <ProtectedRoute>
                  <Alerts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/Vulnerabilities"
              element={
                <ProtectedRoute>
                  <Vulnerabilities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/Reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/Settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/HelpSupport"
              element={
                <ProtectedRoute>
                  <HelpSupport />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </ReactLenis>
    </BrowserRouter>
  );
}

export default App;
