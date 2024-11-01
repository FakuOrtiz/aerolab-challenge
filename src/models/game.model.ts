export interface ResultGame {
  id: number;
  name: string;
  cover?: GameImage;
}

export interface SavedGame {
  id: number;
  name: string;
  cover?: GameImage;
  first_release_date: number;
}

export interface Game {
  id: number;
  cover?: GameImage;
  artworks?: GameImage[];
  first_release_date: number;
  genres?: Element[];
  involved_companies?: InvolvedCompany[];
  name: string;
  platforms?: Element[];
  rating: number;
  similar_games: SimilarGame[];
  summary: string;
}

// -------------

export interface GameImage {
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
  cover: GameImage;
}
