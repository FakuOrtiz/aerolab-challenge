"use client"

import useGameDetails from "./hooks/useGameDetails";
import styles from "./styles.module.scss";

const GameDetails = ({ id }: { id: string }) => {
  const { game } = useGameDetails(id);

  return <section className={styles.container}>{JSON.stringify(game)}</section>;
};

export default GameDetails;
