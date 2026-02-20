/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validators";
import { getPasswordStrength } from "../../utils/passwordStrength";
import API from "../../api/backend_api";
import { AuthContext } from "../../context/AuthContext";
import AuthLoader from "../../components/AuthLoader";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(null); // "google" | "github" | null

  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const strength = getPasswordStrength(password);

  useEffect(() => {
    if (user?.is_verified) navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmError = validateConfirmPassword(password, confirmPassword);

    if (emailError || passwordError || confirmError || !agree) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmError,
        agree: !agree ? "You must accept the terms" : "",
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await API.post("/api/auth/register", {
        username,
        email,
        password,
        full_name: name,
      });

      await login(res.data.access_token, res.data.user);
      navigate("/auth/dashboard/verify-email-notice", { replace: true });
    } catch (err) {
      setErrors({
        backend:
          err.response?.data?.error?.message || "Signup failed. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider) => {
    setOauthLoading(provider);
    setErrors({});
    try {
      const response = await API.get(`/api/auth/oauth/${provider}`);
      if (response.data.auth_url) {
        localStorage.setItem("oauth_state", response.data.state);
        window.location.href = response.data.auth_url;
        return;
      }
    } catch (err) {
      setErrors({ backend: `${provider} signup failed. Please try again.` });
      setOauthLoading(null);
    }
  };

  if (loading) return <AuthLoader message="Creating your account..." />;
  if (oauthLoading)
    return (
      <AuthLoader
        message={`Connecting with ${
          oauthLoading.charAt(0).toUpperCase() + oauthLoading.slice(1)
        }...`}
      />
    );

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Secure your applications with WebXGuard"
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/auth/dashboard/login"
            className="text-emerald-400 hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {errors.backend && (
          <p className="text-xs text-red-400">{errors.backend}</p>
        )}

        <AuthInput
          label="Full name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AuthInput
          label="Username"
          placeholder="johndoe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          label="Email address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        {password && (
          <div className="text-xs text-gray-400">
            Strength:
            <span className="ml-2 font-semibold text-white">
              {strength.label}
            </span>
            <div className="h-1 w-full bg-gray-700 rounded mt-1">
              <div
                className={`h-1 rounded transition-all ${strength.color}`}
                style={{ width: `${strength.percent}%` }}
              />
            </div>
          </div>
        )}

        <AuthInput
          label="Confirm password"
          type="password"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />

        <div className="text-sm text-gray-400">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="accent-emerald-500 mt-1"
            />
            <span>
              I agree to the{" "}
              <Link className="text-emerald-400 hover:underline">Terms</Link>{" "}
              and{" "}
              <Link className="text-emerald-400 hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agree && (
            <p className="text-xs text-red-400 mt-1">{errors.agree}</p>
          )}
        </div>

        <AuthButton
          text="Create Account"
          loading={loading}
          disabled={
            !name ||
            !email ||
            !password ||
            !confirmPassword ||
            !agree ||
            loading
          }
        />
      </form>

      {/* OAuth */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">
              Or sign up with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleOAuthLogin("google")}
            disabled={!!oauthLoading}
            className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium text-gray-300">
              Google
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleOAuthLogin("github")}
            disabled={!!oauthLoading}
            className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm font-medium text-gray-300">
              GitHub
            </span>
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
