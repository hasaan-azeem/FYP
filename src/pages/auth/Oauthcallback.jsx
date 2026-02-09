import { useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import API from "../../api/backend_api";

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Get tokens from URL parameters
        const accessToken = searchParams.get("access_token");
        const refreshToken = searchParams.get("refresh_token");

        if (!accessToken) {
          throw new Error("No access token received");
        }

        // Save tokens
        localStorage.setItem("token", accessToken);
        if (refreshToken) {
          localStorage.setItem("refresh_token", refreshToken);
        }

        // Fetch user data
        const userRes = await API.get("/api/auth/me");
        
        // Login with user data
        await login(accessToken, userRes.data);

        // Redirect to dashboard
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error("OAuth callback error:", error);
        navigate("/auth/dashboard/login", { 
          replace: true,
          state: { error: "OAuth authentication failed. Please try again." }
        });
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Completing authentication...
        </p>
      </div>
    </div>
  );
}