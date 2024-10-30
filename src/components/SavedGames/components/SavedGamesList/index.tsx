import { SavedGame } from "../../models/savedGames";
import GameCover from "../GameCover";
import styles from "./styles.module.scss";

const SavedGamesList = ({ games }: { games: SavedGame[] }) => {
  return (
    <ul className={styles.container}>
      {games.map((game, i) => (
        <GameCover key={i} />
      ))}
    </ul>
  );
};

export default SavedGamesList;
