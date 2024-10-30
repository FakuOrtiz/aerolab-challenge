import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import useFilter from "../../hooks/useFilter";

const FilterList = () => {
  const activeIndicator = useRef<HTMLDivElement>(null);

  const { filter, showLatest, showNewest, showOldest } = useFilter();

  useEffect(() => {
    if (document.readyState === "complete") {
      onMoveActiveIndicator();
    }
  }, [filter]);

  const filterElements = [
    {
      title: "Last added",
      onClick: () => {
        onMoveActiveIndicator();
        showLatest();
      },
      isActive: filter === "LATEST",
    },
    {
      title: "Newest",
      onClick: () => {
        onMoveActiveIndicator();
        showNewest();
      },
      isActive: filter === "NEWEST",
    },
    {
      title: "Oldest",
      onClick: () => {
        onMoveActiveIndicator();
        showOldest();
      },
      isActive: filter === "OLDEST",
    },
  ];

  const onMoveActiveIndicator = () => {
    const activeElement = document.getElementsByClassName(
      styles.activeOption
    )[0] as HTMLLIElement;

    const { offsetWidth, offsetLeft } = activeElement;

    activeIndicator.current!.style.left = `calc(${offsetLeft}px - 5px)`;

    activeIndicator.current!.style.width = `calc(${offsetWidth}px)`;
  };

  return (
    <ul className={styles.containerFilterList}>
      <div
        className={styles.activeIndicator}
        ref={activeIndicator}
        style={{ width: "calc(100%)" }}
      />

      {filterElements.map(({ title, onClick, isActive }, i) => (
        <li
          key={i}
          role="button"
          onClick={onClick}
          className={isActive ? styles.activeOption : ""}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
