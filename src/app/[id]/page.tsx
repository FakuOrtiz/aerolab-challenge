"use client";

import GameDetails from "@/components/GameDetails";
import { useParams } from "next/navigation";

const GameDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  return (
    <>
      <GameDetails />
    </>
  );
};

export default GameDetailsPage;
