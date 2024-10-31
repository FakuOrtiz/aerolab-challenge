import { apiClientId, apiClientSecret, authPath } from "@/constants/env";
import axios from "axios";
import { ApiToken } from "./auth.model";

export const getApiToken = async () => {
  try {
    const { data } = await axios.post<ApiToken>(
      `${authPath}?client_id=${apiClientId}&client_secret=${apiClientSecret}&grant_type=client_credentials`
    );

    return data.access_token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API:", error.response?.data);
    }
  }
};
