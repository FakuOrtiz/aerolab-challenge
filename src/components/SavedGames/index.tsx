"use client";

import styles from "./styles.module.scss";
import EmptySavedGames from "./components/EmptySavedGames";
import useSavedGames from "./hooks/useSavedGames";
import FilterList from "./components/FilterList";
import GameCover from "../GameCover";

const SavedGames = () => {
  const { savedGames } = useSavedGames();

  if (!savedGames) return <></>;

  if (!savedGames.length) return <EmptySavedGames />;

  return (
    <section className={styles.container}>
      <FilterList />

      <ul className={styles.ul}>
        {savedGames.map((game) => {
          let imageUrl = "/default-cover.jpg";

          if (game?.cover?.image_id) {
            imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.webp`;
          }

          return (
            <GameCover
              key={game.id}
              id={String(game.id)}
              imageUrl={imageUrl}
              showTrash
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SavedGames;
