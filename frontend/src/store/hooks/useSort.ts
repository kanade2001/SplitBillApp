import { useState } from "react";
import { SortProps, initialSort } from "../types/sort";

export function useSort() {
  const [sort, setSort] = useState<SortProps>(initialSort);

  const handleSort = (id: string | null) => {
    let newSort = { ...sort };
    if (id === null) {
      newSort = initialSort;
    } else if (sort.id === id) {
      if (sort.type === "ascending") {
        newSort = { id, type: "descending" };
      } else {
        newSort = initialSort;
      }
    } else {
      newSort = { id, type: "ascending" };
    }
    setSort(newSort);
    return newSort;
  };

  return {
    sort,
    handleSort,
  };
}
