import { useEffect, useState } from "react";
import { SavedGame } from "../models/savedGames";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    setSavedGames([
      { id: 1, name: "Ejemplo 1" },
      { id: 2, name: "Ejemplo 2" },
      { id: 3, name: "Ejemplo 3" },
    ]);
  }, []);

  // const { filter } = useFilter();

  // useEffect(() => {
  //   setSavedGames([
  //     { id: 1, name: "Ejemplo 1" },
  //     { id: 2, name: "Ejemplo 2" },
  //     { id: 3, name: "Ejemplo 3" },
  //   ]);
  // }, [filter]);

  return {
    savedGames,
  };
};

export default useSavedGames;
