import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { validateEmail, validatePassword } from "../../utils/validators";
import API from "../../api/backend_api"; // Axios instance for backend
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { login } = useContext(AuthContext); // store JWT
  const navigate = useNavigate();

  // ✅ Auto redirect if already logged in
  useEffect(() => {
    if (user?.token) {
      navigate("/dashboard"); // agar logged in hai, dashboard pe bhej do
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Call backend login route
      const res = await API.post("/auth/dashboard/login", { email, password });

      // Save JWT in AuthContext
      await login(res.data.access_token);

      setLoading(false);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      const msg =
        err.response?.data?.msg ||
        "Login failed. Check credentials and try again.";
      setErrors({ backend: msg });
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your WebXGuard dashboard"
      footer={
        <>
          Don’t have an account?{" "}
          <Link
            to="/auth/dashboard/signup"
            className="text-emerald-400 hover:underline"
          >
            Create one
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Backend error */}
        {errors.backend && (
          <p className="text-sm text-red-400">{errors.backend}</p>
        )}

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
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <AuthButton
          text="Sign In"
          loading={loading}
          disabled={!email || !password}
        />
      </form>
    </AuthLayout>
  );
}
