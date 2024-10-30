"use client";

import styles from "./styles.module.scss";
import EmptySavedGames from "./components/EmptySavedGames";
import useSavedGames from "./hooks/useSavedGames";
import FilterList from "./components/FilterList";
import SavedGamesList from "./components/SavedGamesList";

const SavedGames = () => {
  const { savedGames } = useSavedGames();

  if (!savedGames) {
    return <p>Loading...</p>;
  }

  if (!savedGames.length) {
    return <EmptySavedGames />;
  }

  return (
    <section className={styles.container}>
      <FilterList />
      <SavedGamesList games={savedGames} />
    </section>
  );
};

export default SavedGames;
