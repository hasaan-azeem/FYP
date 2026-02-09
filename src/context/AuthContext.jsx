// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useState, useEffect } from "react";
// import API from "../api/backend_api";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);

//   // =============================
//   // AUTO LOAD USER ON REFRESH
//   // =============================
//   useEffect(() => {
//     const loadUser = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setAuthLoading(false);
//         return;
//       }

//       try {
//         const res = await API.get("/me", { withCredentials: true })
//           .then((res) => console.log(res.data))
//           .catch((err) => console.error(err));

//         setUser({ ...res.data, token });
//       } catch {
//         localStorage.removeItem("token");
//         setUser(null);
//       }

//       setAuthLoading(false);
//     };

//     loadUser();
//   }, []);

//   // =============================
//   // LOGIN
//   // call AFTER backend returns token
//   // =============================
//   const login = async (token) => {
//     localStorage.setItem("token", token);

//     const res = await API.get("/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setUser({ ...res.data, token });
//   };

//   // =============================
//   // LOGOUT
//   // =============================
//   const logout = async () => {
//     try {
//       if (user?.token) {
//         await API.post(
//           "/dashboard/logout",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           },
//         );
//       }
//     } catch (err) {
//       console.error("Logout error:", err);
//     }

//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, authLoading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";
import API from "../api/backend_api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user data from backend
  const fetchUser = async () => {
    try {
      const res = await API.get("/api/auth/me");
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (access_token, userData = null) => {
    try {
      // Save token
      localStorage.setItem("token", access_token);

      // If user data is already provided (from register/login response), use it
      if (userData) {
        setUser(userData);
        setLoading(false);
      } else {
        // Otherwise fetch user data
        await fetchUser();
      }
    } catch (error) {
      console.error("Login error:", error);
      localStorage.removeItem("token");
      setLoading(false);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await API.post("/api/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}
