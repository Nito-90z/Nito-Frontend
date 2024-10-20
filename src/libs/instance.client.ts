import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

export const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5 * 1000,
  headers: { "Content-Type": "application/json" },
});

clientInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      const newConfig = config;
      newConfig.headers.Authorization = `Bearer ${accessToken}`;

      return newConfig;
    }
    return config;
  }
);
