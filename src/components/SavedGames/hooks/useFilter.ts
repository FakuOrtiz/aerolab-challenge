"use client";

import { useState } from "react";

type Filter = "LATEST" | "NEWEST" | "OLDEST";

const useFilter = () => {
  const [filter, setFilter] = useState<Filter>("LATEST");

  const showLatest = () => setFilter("LATEST");
  const showNewest = () => setFilter("NEWEST");
  const showOldest = () => setFilter("OLDEST");

  const isLatestActive = filter === "LATEST";
  const isNewestActive = filter === "NEWEST";
  const isOldestActive = filter === "OLDEST";

  return {
    showLatest,
    showNewest,
    showOldest,
    isLatestActive,
    isNewestActive,
    isOldestActive,
  };
};

export default useFilter;
