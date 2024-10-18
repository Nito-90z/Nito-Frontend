import axios from "axios";

export const queryInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 5 * 1000,
  headers: { "Content-Type": "application/json" },
});

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 5 * 1000,
  headers: { "Content-Type": "application/json" },
});
