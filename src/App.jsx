// import React, { useContext } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { ReactLenis } from "lenis/react";
// // Context
// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthContext } from "./context/AuthContext";

// // Client Layout and Pages
// import ClientLayout from "./layouts/ClientLayout";
// import Home from "./pages/landing/Home";
// import Features from "./pages/landing/Features";
// import Aboutus from "./pages/landing/AboutUs";
// import Contact from "./pages/landing/Contact";
// import Resource from "./pages/landing/Resource";

// // Admin Layout and Pages
// import AdminLayout from "./layouts/AdminLayout";
// import Dashboard from "./pages/admin/Dashboard";
// import Websites from "./pages/admin/Websites";
// import Alerts from "./pages/admin/Alerts";
// import Vulnerabilities from "./pages/admin/Vulnerabilities";
// import Reports from "./pages/admin/Reports";
// import Settings from "./pages/admin/Settings";
// import HelpSupport from "./pages/admin/HelpSupport";
// import ContinousMonitoring from "./pages/admin/ContinousMonitoring";

// // Auth Pages
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import ScrollToTop from "./components/ScrollToTop";

// function AppContent() {
//   const location = useLocation();
//   const { authLoading } = useContext(AuthContext);

//   // Disable Lenis for dashboard routes
//   const isDashboard = location.pathname.startsWith("/dashboard");

//   if (authLoading) {
//     return null;
//   }

//   const content = (
//     <>
//       <ScrollToTop />
//       <Routes>
//         {/* Client Routes */}
//         <Route element={<ClientLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/resources" element={<Resource />} />

//           {/* Auth Routes (No header/sidebar) */}
//           <Route path="/auth/dashboard/login" element={<Login />} />
//           <Route path="/auth/dashboard/signup" element={<Signup />} />
//         </Route>

//         {/* Admin Routes (Protected) */}
//         <Route element={<AdminLayout />}>
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard/ContinuousMonitoring"
//             element={
//               <ProtectedRoute>
//                 <ContinousMonitoring />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard/vulnerability"
//             element={
//               <ProtectedRoute>
//                 <Vulnerabilities />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard/reports"
//             element={
//               <ProtectedRoute>
//                 <Reports />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard/Settings"
//             element={
//               <ProtectedRoute>
//                 <Settings />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/dashboard/HelpSupport"
//             element={
//               <ProtectedRoute>
//                 <HelpSupport />
//               </ProtectedRoute>
//             }
//           />
//         </Route>
//       </Routes>
//     </>
//   );

//   // Only wrap with Lenis if NOT on dashboard
//   if (isDashboard) {
//     return content;
//   }

//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.1,
//         duration: 1.2,
//         orientation: "vertical",
//         gestureOrientation: "vertical",
//         smoothWheel: true,
//         wheelMultiplier: 1,
//         smoothTouch: false,
//         touchMultiplier: 2,
//       }}
//     >
//       {content}
//     </ReactLenis>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ForgotPassword from "./pages/auth/Forgotpassword";
import ResetPassword from "./pages/auth/ResetPassword";
import OAuthCallback from "./pages/auth/OAuthCallback";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const { authLoading } = useContext(AuthContext);

  // Disable Lenis for dashboard routes
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (authLoading) {
    return null;
  }

  const content = (
    <>
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
          <Route
            path="/auth/dashboard/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/auth/dashboard/reset-password"
            element={<ResetPassword />}
          />
          <Route path="/auth/callback" element={<OAuthCallback />} />
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
            path="/dashboard/ContinuousMonitoring"
            element={
              <ProtectedRoute>
                <ContinousMonitoring />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/vulnerability"
            element={
              <ProtectedRoute>
                <Vulnerabilities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/reports"
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
    </>
  );

  // Only wrap with Lenis if NOT on dashboard
  if (isDashboard) {
    return content;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      }}
    >
      {content}
    </ReactLenis>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
