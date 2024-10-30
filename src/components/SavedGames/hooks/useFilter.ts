"use client";

import { useState } from "react";

type Filter = "LATEST" | "NEWEST" | "OLDEST";

const useFilter = () => {
  const [filter, setFilter] = useState<Filter>("LATEST");

  const showLatest = () => setFilter("LATEST");
  const showNewest = () => setFilter("NEWEST");
  const showOldest = () => setFilter("OLDEST");

  return {
    filter,
    showLatest,
    showNewest,
    showOldest,
  };
};

export default useFilter;
