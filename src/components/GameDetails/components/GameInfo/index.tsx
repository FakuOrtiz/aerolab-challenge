import GameCarousel from "../GameCarousel";
import styles from "./styles.module.scss";

interface Props {
  summary: string;
  platforms?: string;
  gallery?: string[];
}

const GameInfo = ({ summary, platforms, gallery }: Props) => {
  return (
    <div className={styles.container}>
      <article>
        <h2>Summary</h2>
        <p>{summary || "Unknown"}</p>
      </article>

      <article>
        <h2>Platforms</h2>
        <p>{platforms || "Unknown"}</p>
      </article>

      {gallery && gallery.length && (
        <article>
          <h2>Media</h2>

          <GameCarousel gallery={gallery} />
        </article>
      )}
    </div>
  );
};

export default GameInfo;
