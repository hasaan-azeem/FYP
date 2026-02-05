import { useState, useContext } from "react";
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
import API from "../../api/backend_api"; // Axios instance
import { AuthContext } from "../../context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext); // to save JWT
  const navigate = useNavigate();

  const strength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
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
      // Call backend signup
      const res = await API.post("/auth/signup", {
        username: name,
        email,
        password,
      });

      // Optional: auto-login after signup
      login(res.data.access_token);

      setLoading(false);
      navigate("/login"); // redirect to dashboard
    } catch (err) {
      setLoading(false);
      setErrors({
        backend: err.response?.data?.msg || "Signup failed. Try again.",
      });
    }
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Secure your applications with WebXGuard"
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-400 hover:underline">
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

        {/* Password strength */}
        {password && (
          <div className="text-xs text-gray-400">
            Strength:
            <span className="ml-2 font-semibold text-white">
              {strength.label}
            </span>
            <div className="h-1 w-full bg-gray-700 rounded mt-1">
              <div
                className={`h-1 rounded ${strength.color}`}
                style={{
                  width:
                    strength.label === "Weak"
                      ? "33%"
                      : strength.label === "Medium"
                        ? "66%"
                        : "100%",
                }}
              />
            </div>
          </div>
        )}

        <AuthInput
          label="Confirm password"
          type="password"
          placeholder="ReEnter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />

        {/* Terms */}
        <div className="text-sm text-gray-400">
          <label className="flex items-start gap-2">
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
          disabled={!name || !email || !password || !confirmPassword || !agree}
        />
      </form>
    </AuthLayout>
  );
}
