import { useEffect, useState } from "react";
import { SavedGame } from "../models/savedGames";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    setSavedGames([
      { id: 1, name: "Ejemplo 1" },
      { id: 2, name: "Ejemplo 2" },
      { id: 3, name: "Ejemplo 3" },
      { id: 4, name: "Ejemplo 4" },
      { id: 5, name: "Ejemplo 5" },
      { id: 6, name: "Ejemplo 6" },
      { id: 7, name: "Ejemplo 7" },
      { id: 8, name: "Ejemplo 8" },
      { id: 9, name: "Ejemplo 9" },
      { id: 10, name: "Ejemplo 10" },
      { id: 11, name: "Ejemplo 11" },
      { id: 12, name: "Ejemplo 12" },
      { id: 13, name: "Ejemplo 13" },
      { id: 14, name: "Ejemplo 14" },
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
