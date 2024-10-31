import axios from "axios";

export const getApiToken = async () => {
  try {
    const { data } = await axios.get<{ token: string }>("/api/token");

    return data.token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("FRONT:", error.response?.data);
    }
  }
};
