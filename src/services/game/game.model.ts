interface Cover {
  id: number;
  image_id: string;
}

export interface SearchedGame {
  id: number;
  name: string;
  cover?: Cover;
}
