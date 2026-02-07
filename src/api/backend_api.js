import axios from "axios";

// Create a single axios instance
const API = axios.create({
  baseURL: "http://127.0.0.1:5000", // Flask backend
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // for cookies if needed
});

// Request interceptor to automatically add Authorization header
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
