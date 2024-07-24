// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api", // Set the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
