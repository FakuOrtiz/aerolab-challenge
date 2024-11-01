export interface ResultGame {
  id: number;
  name: string;
  cover?: Image;
}

export interface SavedGame {
  id: number;
  cover?: Image;
  first_release_date: number;
}

export interface Game {
  id: number;
  cover?: Image;
  artworks?: Image[];
  first_release_date: number;
  genres?: Element[];
  involved_companies?: InvolvedCompany[];
  name: string;
  platforms?: Element[];
  rating: number;
  similar_games: SimilarGame[];
  summary: string;
}

interface Image {
  id: number;
  image_id: string;
}

interface Element {
  id: number;
  name: string;
}

interface InvolvedCompany {
  id: number;
  company: Element;
}

export interface SimilarGame {
  id: number;
  cover: Image;
}
