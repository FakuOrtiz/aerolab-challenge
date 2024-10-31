import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  rating: number;
  release: number;
  genre: string;
}

const GameStats = ({ rating, release, genre }: Props) => {
  const stats = [
    {
      icon: "/game-details/star.svg",
      name: "Rating",
      value: (rating / 10).toFixed(1),
    },
    {
      icon: "/game-details/calendar.svg",
      name: "Release",
      value: new Date(release * 1000).toLocaleDateString("es-ES"),
    },
    {
      icon: "/game-details/puzzle.svg",
      name: "Genre",
      value: genre,
    },
  ];

  return (
    <ul className={styles.ul}>
      {stats.map((stat) => (
        <li key={stat.name}>
          <Image src={stat.icon} alt={stat.name} width={16} height={16} />

          <h3>
            {stat.name}: <span>{stat.value}</span>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default GameStats;
