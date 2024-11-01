import { SavedGame } from "@/models/game.model";
import { useEffect, useState } from "react";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    if (document.readyState === "complete" && !savedGames) {
      const localStorageGames = localStorage.getItem("games");

      if (localStorageGames && localStorageGames !== "undefined") {
        setSavedGames(JSON.parse(localStorageGames));
      } else {
        setSavedGames([]);
      }
    }
  }, [savedGames]);

  const saveGame = (game: SavedGame) => {
    let localStorageGames: string | undefined | SavedGame[] =
      localStorage.getItem("games") as string;

    if (localStorageGames && localStorageGames !== "undefined") {
      localStorageGames = JSON.parse(
        localStorageGames as string
      ) as SavedGame[];

      localStorageGames.push(game);

      setSavedGames(localStorageGames);
      localStorage.setItem("games", JSON.stringify(localStorageGames));
    } else {
      setSavedGames([game]);
      localStorage.setItem("games", JSON.stringify([game]));
    }
  };

  const removeSavedGame = (id: number) => {
    let localStorageGames = JSON.parse(
      localStorage.getItem("games")!
    ) as SavedGame[];

    localStorageGames = localStorageGames.filter((games) => games.id !== id);

    setSavedGames(localStorageGames);
    localStorage.setItem("games", JSON.stringify(localStorageGames));
  };
  return {
    savedGames,
    removeSavedGame,
    saveGame,
  };
};

export default useSavedGames;
