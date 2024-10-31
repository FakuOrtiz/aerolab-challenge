import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import useFilter from "../../hooks/useFilter";
import useWindowSize from "@/hooks-global/useWindowSize";

const FilterList = () => {
  const activeIndicator = useRef<HTMLDivElement>(null);

  const { filter, showLatest, showNewest, showOldest } = useFilter();
  const { screenWidth } = useWindowSize();

  // Listen when filter list is at top of screen
  useEffect(() => {
    const handleScroll = () => {
      const containerList = document.getElementsByClassName(
        styles.containerFilterList
      )[0] as HTMLLIElement;

      if (containerList.getBoundingClientRect().top === 16) {
        containerList.classList.add(styles.fixed);
      } else {
        containerList.classList.remove(styles.fixed);
      }
    };

    if (screenWidth <= 700) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenWidth]);

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

  // Move indicator when filter updates
  useEffect(() => {
    if (document.readyState === "complete") {
      onMoveActiveIndicator();
    }
  }, [filter]);

  const onMoveActiveIndicator = () => {
    const { offsetWidth, offsetLeft } = document.getElementsByClassName(
      styles.activeOption
    )[0] as HTMLLIElement;

    activeIndicator.current!.style.left = `calc(${offsetLeft}px - 5px)`;

    console.log(activeIndicator.current?.style.width);

    activeIndicator.current!.style.width = `calc(${offsetWidth}px)`;
  };

  return (
    <ul className={styles.containerFilterList}>
      <div
        className={styles.activeIndicator}
        ref={activeIndicator}
        style={{ width: activeIndicator.current?.style.width + "px" }}
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
