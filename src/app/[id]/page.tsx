import GameDetails from "@/components/GameDetails";

interface Props {
  params: Promise<{ id: string }>;
}

const GameDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  console.log(id);

  return <GameDetails />;
};

export default GameDetailsPage;
