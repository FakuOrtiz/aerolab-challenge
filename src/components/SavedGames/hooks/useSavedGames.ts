import { useEffect, useState } from "react";
import { SavedGame } from "../models/savedGames";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  // const { filter, isLatestActive, isNewestActive, isOldestActive } = useFilter();

  useEffect(() => {
    setSavedGames([{ name: "" }, { name: "" }, { name: "" }]);
  }, []);

  // useEffect(() => {
  //   setSavedGames([{ name: "" }, { name: "" }, { name: "" }]);
  // }, [filter]);

  return {
    savedGames,
  };
};

export default useSavedGames;
