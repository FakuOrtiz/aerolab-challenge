import { apiClientId, apiPath } from "@/constants/env";
import axios from "axios";
import { getApiToken } from "./auth";

//TODO: Clear localStorage bearer token at close app

const axiosClient = axios.create({
  baseURL: apiPath,
  headers: {
    Accept: "application/json",
    "Client-ID": apiClientId,
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("bearerToken");

  if (!token || token === "undefined") {
    token = (await getApiToken()) as string;
    localStorage.setItem("bearerToken", token);
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default axiosClient;
