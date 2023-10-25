import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { getLocale } from "next-intl/server";

const fetchIp : any = async () => {
  const response : any = await fetch("https://api.ipify.org/?format=json")
  const data : any = await response.json()
  setCookie("user-ip", data.ip)
  return data.ip;
}
const userIp = fetchIp();

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "lang": getCookie("NEXT_LOCALE"),
    "device_token" : getCookie("user-ip") || userIp
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
