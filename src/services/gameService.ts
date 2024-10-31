import axios from "axios";

interface Default {
  type: "DEFAULT";
}

interface Search {
  type: "SEARCH";
  name: string;
}

interface Details {
  type: "DETAILS";
  id: string;
}

type Params = Default | Search | Details;

export const searchGames = async <T>(params: Params): Promise<T> => {
  const { type } = params;

  let body = "fields name, cover.image_id;";

  if (type === "SEARCH") body += ` search "${params.name}";`;

  if (type === "DETAILS") {
    body = `
      fields
        name,
        rating,
        genres.name,
        summary,
        artworks.image_id,
        first_release_date,
        similar_games.cover.image_id,
        platforms.name,
        involved_companies.company.name;
      where id = ${params.id};`;
  }

  const postData = {
    body,
    token: localStorage.getItem("bearerToken"),
  };

  try {
    const { data } = await axios.post<{ data: T }>("/api/games", postData);

    return data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("FRONT RES:", error.response?.data);
    }
    throw error;
  }
};
