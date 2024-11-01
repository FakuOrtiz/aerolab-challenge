import { SavedGame } from "@/models/game.model";
import { useEffect, useState } from "react";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    setSavedGames([]);
  }, []);

  return {
    savedGames,
  };
};

export default useSavedGames;
