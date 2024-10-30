import { useEffect, useState } from "react";
import { SavedGame } from "../models/savedGames";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    setSavedGames([{ name: "" }, { name: "" }, { name: "" }]);
  }, []);

  return {
    savedGames,
  };
};

export default useSavedGames;
