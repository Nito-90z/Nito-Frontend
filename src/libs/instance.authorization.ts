import { refresh } from "@/services/user";
import axios, { InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10 * 1000,
  headers: { "Content-Type": "application/json" },
});

authInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error)) {
      // accessToken이 만료된 경우
      if (error.status === 444) {
        const cookieStore = cookies();
        try {
          const originRequest = error.config as InternalAxiosRequestConfig;
          const { accessToken, refreshToken } = await refresh();

          cookieStore.set("accessToken", accessToken);
          cookieStore.set("refreshToken", refreshToken);
          originRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);
