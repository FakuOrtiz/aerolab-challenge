"use client";

import GameHero from "./components/GameHero";
import GameInfo from "./components/GameInfo";
import GameStats from "./components/GameStats";
import NotFoundGame from "./components/NotFoundGame";
import SimilarGames from "./components/SimilarGames";
import useGameDetails from "./hooks/useGameDetails";
import styles from "./styles.module.scss";

const GameDetails = ({ id }: { id: string }) => {
  const { game, isLoading } = useGameDetails(id);

  if (isLoading) return <></>;

  if (!game) return <NotFoundGame />;

  return (
    <section className={styles.container}>
      <GameHero
        name={game.name}
        publisher={game?.involved_companies?.[0]?.company?.name}
        coverId={game?.cover?.image_id}
      />

      <GameStats
        rating={game.rating}
        release={game.first_release_date}
        genre={game?.genres?.map((genre) => genre?.name).join(", ")}
      />

      <GameInfo
        summary={game.summary}
        platforms={game?.platforms
          ?.map((platform) => platform?.name)
          .join(", ")}
        gallery={game?.artworks?.map((platform) => platform?.image_id)}
      />

      {game?.similar_games && game?.similar_games.length > 0 && (
        <SimilarGames similarGames={game?.similar_games} />
      )}
    </section>
  );
};

export default GameDetails;
