import styles from "./styles.module.scss";
import useFilter from "../../hooks/useFilter";

const FilterList = () => {
  const {
    showLatest,
    showNewest,
    showOldest,
    isLatestActive,
    isNewestActive,
    isOldestActive,
  } = useFilter();

  return (
    <ul className={styles.containerFilterList}>
      <li>
        <button
          onClick={showLatest}
          className={isLatestActive ? styles.active : ""}
        >
          Last added
        </button>
      </li>

      <li>
        <button
          onClick={showNewest}
          className={isNewestActive ? styles.active : ""}
        >
          Newest
        </button>
      </li>

      <li>
        <button
          onClick={showOldest}
          className={isOldestActive ? styles.active : ""}
        >
          Oldest
        </button>
      </li>
    </ul>
  );
};

export default FilterList;
