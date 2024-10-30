import styles from "./styles.module.scss";
import SavedGames from "@/components/SavedGames";

const Home = () => {
  return (
    <>
      <h2 className={styles.savedGamesTitle}>Saved games</h2>

      <SavedGames />
    </>
  );
};

export default Home;
