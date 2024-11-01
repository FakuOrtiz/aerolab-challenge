"use client";

import Loader from "../Loader";
import GameHero from "./components/GameHero";
import GameInfo from "./components/GameInfo";
import GameStats from "./components/GameStats";
import NotFoundGame from "./components/NotFoundGame";
import SimilarGames from "./components/SimilarGames";
import useGameDetails from "./hooks/useGameDetails";
import styles from "./styles.module.scss";

const GameDetails = ({ id }: { id: string }) => {
  const { game, loading, error } = useGameDetails(id);

  if (error) return <NotFoundGame />;

  if (!game || loading) return <Loader />;

  let imageUrl = "https://aerolab.vercel.app/default-cover.jpg";

  if (game?.cover?.image_id) {
    imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover.image_id}.png`;
  }

  const ogImageUrl = `https://aerolab.vercel.app/api/og?title=${encodeURIComponent(
    game.name
  )}&img=${encodeURIComponent(imageUrl)}`;

  return (
    <>
      <title>{game.name}</title>
      <meta property="og:title" content={game.name} />
      <meta property="og:description" content={game.summary || "No summary"} />
      <meta property="og:image" content={ogImageUrl} />
      <meta
        property="og:url"
        content={`https://aerolab.vercel.app/game/${game.id}`}
      />

      <section className={styles.container}>
        <GameHero
          name={game.name}
          publisher={game?.involved_companies?.[0]?.company?.name}
          gameId={game.id}
          cover={game?.cover}
          release={game.first_release_date}
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
    </>
  );
};

export default GameDetails;
