import axios from "axios";
import { SearchedGame } from "./game.model";
import axiosClient from "../axios.config";

export const searchGames = async (name?: string) => {
  let body = "fields name, cover.image_id;";

  if (name) body += ` search "${name}";`;

  try {
    const { data } = await axiosClient.post<SearchedGame[]>("/games", body);

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("API:", error.response?.data);
    }
  }
};
