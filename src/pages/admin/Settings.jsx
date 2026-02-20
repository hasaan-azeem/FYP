// import React, { useState } from "react";

// const Setting = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ name, email, password });
//   };

//   return (
//     <div className="max-w-full mx-auto p-6 bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md ">
//       <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
//             placeholder="analyst@webxguard.com"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="email">
//             Change Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
//             placeholder="********"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 w-full bg-[#10B981] text-white rounded-md hover:bg-[#1EC8A0] focus:outline-none transition"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Setting;

import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../api/backend_api";

const Setting = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
  });
  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [passwordMessage, setPasswordMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        full_name: user.full_name || "",
        email: user.email || "",
        username: user.username || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage({ type: "", text: "" });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
    setPasswordMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await API.put("/api/users/me", {
        full_name: formData.full_name,
        username: formData.username,
      });

      setMessage({
        type: "success",
        text: "Profile updated successfully!",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.error?.message || "Failed to update profile",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage({ type: "", text: "" });

    if (passwordData.new_password !== passwordData.confirm_password) {
      setPasswordMessage({
        type: "error",
        text: "Passwords do not match",
      });
      setPasswordLoading(false);
      return;
    }

    if (passwordData.new_password.length < 8) {
      setPasswordMessage({
        type: "error",
        text: "Password must be at least 8 characters",
      });
      setPasswordLoading(false);
      return;
    }

    try {
      await API.put("/api/users/me/password", {
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
      });

      setPasswordMessage({
        type: "success",
        text: "Password changed successfully!",
      });

      setPasswordData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (error) {
      setPasswordMessage({
        type: "error",
        text:
          error.response?.data?.error?.message || "Failed to change password",
      });
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto dark:text-gray-200 shadow-md ">
      {/* Profile Information */}
      <div className="bg-white dark:bg-[#0F172B] dark:text-gray-200 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

        {message.text && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-900 cursor-not-allowed"
              placeholder="analyst@webxguard.com"
            />
            <p className="text-xs text-gray-500 mt-1">
              Email cannot be changed
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-full bg-[#10B981] text-white rounded-md hover:bg-[#1EC8A0] focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-white mt-5 dark:bg-[#0F172B] dark:text-gray-200 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>

        {passwordMessage.text && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              passwordMessage.type === "success"
                ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
            }`}
          >
            {passwordMessage.text}
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="current_password"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current_password"
              name="current_password"
              value={passwordData.current_password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="new_password"
            >
              New Password
            </label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              value={passwordData.new_password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700"
              placeholder="Enter new password"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirm_password"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={passwordData.confirm_password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            disabled={
              passwordLoading ||
              !passwordData.current_password ||
              !passwordData.new_password ||
              !passwordData.confirm_password
            }
            className="px-4 py-2 w-full bg-[#10B981] text-white rounded-md hover:bg-[#1EC8A0] focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {passwordLoading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
