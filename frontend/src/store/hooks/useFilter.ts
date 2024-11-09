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
    const newFilters = { ...filters, [id]: !filters[id] };
    setFilters(newFilters);
    setMasterFilter(Object.values(newFilters).every((value) => value === true));
    return newFilters;
  };

  const handleMasterFilter = () => {
    const newFilters = { ...filters };
    Object.keys(newFilters).forEach((key) => {
      newFilters[key] = !masterFilter;
    });

    setFilters(newFilters);
    setMasterFilter(!masterFilter);
    return newFilters;
  };

  return {
    filters,
    masterFilter,
    handleFilter,
    handleMasterFilter,
  };
}
