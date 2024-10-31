import { apiPath } from "@/constants/env";
import axios from "axios";
import { SearchedGame } from "./game.model";
import axiosClient from "../axios.config";

export const searchGame = async (name: string) => {
  const body = `fields name, cover.image_id; search "${name}";`;

  try {
    const { data } = await axiosClient.post<SearchedGame[]>(
      `${apiPath}/games`,
      body
    );

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API:", error.response?.data);
    }
  }
};
