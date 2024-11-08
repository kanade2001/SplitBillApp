import { useState } from "react";

export function useFilter(options: { id: string }[]) {
  const initialState = options.reduce(
    (acc, option) => {
      acc[option.id] = true;
      return acc;
    },
    {} as Record<string, boolean>,
  );

  const [filters, setFilters] = useState<Record<string, boolean>>(initialState);
  const [masterFilter, setMasterFilter] = useState(true);

  const handleFilter = (id: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [id]: !prev[id] };

      setMasterFilter(
        // 全てのフィルターがtrueの場合にtrueを返す
        Object.values(newFilters).every((value) => value === true),
      );

      return newFilters;
    });
  };

  const handleMasterFilter = () => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      Object.keys(newFilters).forEach((key) => {
        newFilters[key] = !masterFilter;
      });
      return newFilters;
    });
    setMasterFilter(!masterFilter);
  };

  return {
    filters,
    masterFilter,
    handleFilter,
    handleMasterFilter,
  };
}
