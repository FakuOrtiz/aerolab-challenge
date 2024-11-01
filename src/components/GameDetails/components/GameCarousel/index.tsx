import styles from "./styles.module.scss";

const GameCarousel = ({ gallery }: { gallery?: string[] }) => {
  return (
    <div className={styles.container}>
      <p>{JSON.stringify(gallery)}</p>
    </div>
  );
};

export default GameCarousel;
