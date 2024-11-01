"use client";

import Loader from "../Loader";
import GameHero from "./components/GameHero";
import GameInfo from "./components/GameInfo";
import GameStats from "./components/GameStats";
import NotFoundGame from "./components/NotFoundGame";
import SimilarGames from "./components/SimilarGames";
import useGameDetails from "./hooks/useGameDetails";
import styles from "./styles.module.scss";
import { searchGames } from "@/services/gameService";
import { Game } from "@/models/game.model";

const GameDetails = ({ id }: { id: string }) => {
  const { game, loading, error } = useGameDetails(id);

  if (error) return <NotFoundGame />;

  if (!game || loading) return <Loader />;

  return (
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
  );
};

export default GameDetails;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;

  let game: Game | Game[] = await searchGames<Game[]>({ type: "DETAILS", id });

  if (!game.length) return;

  game = game[0];

  let imageUrl = "https://aerolab.vercel.app/default-cover.jpg";

  if (game?.cover?.image_id) {
    imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover.image_id}.png`;
  }

  const ogImageUrl = `http://localhost:3000/api/og?title=${encodeURIComponent(
    game.name
  )}&img=${encodeURIComponent(imageUrl)}`;

  return {
    title: game.name,
    description: game.summary,
    openGraph: {
      title: game.name,
      description: game.summary,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: game.name,
        },
      ],
      url: `http://tu-dominio.com/juegos/${game.id}`,
    },
    twitter: {
      card: "summary_large_card",
      title: game.name,
      description: game.summary,
      images: [ogImageUrl],
    },
  };
}
