import axios from "axios";
import { getCookie } from "cookies-next";
import { getLocale } from "next-intl/server";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // "lang": getLocale(),
    "device_token" : getCookie("user-ip")
  },
});

axiosInstance.interceptors.request.use(async (config : any) => {
  if (isServer) {
    const token = getCookie("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;
