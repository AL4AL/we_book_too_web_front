import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
  withCredentials: true, // cookies will be used for http-only auth cookies
});

export default axiosClient;