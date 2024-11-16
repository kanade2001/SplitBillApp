import React from "react";

import { FilterIcon } from "@/assets/icons/_index";
import DropdownButton from "@/components/ui/dropdown-menu";
import { useFilter } from "@/store/hooks/useFilter";

interface FilterProps {
  setFilter: (filters: { [key: string]: boolean }) => void;
  options: {
    id: string;
    label: string;
  }[];
}

const FilterButton: React.FC<FilterProps> = ({ setFilter, options }) => {
  const { filters, masterFilter, handleFilter, handleMasterFilter } =
    useFilter(options);

  const button = (
    <button
      className={[
        "flex h-6 w-10 items-center justify-center rounded-lg px-2",
        masterFilter ? "bg-gray-600" : "bg-blue-600",
      ].join(" ")}
    >
      <FilterIcon className="h-4 w-4 text-gray-200" />
    </button>
  );

  const children = (
    <>
      <div className="flex gap-2 py-1">
        <input
          type="checkbox"
          checked={masterFilter}
          onChange={() => {
            const newFilters = handleMasterFilter();
            setFilter(newFilters);
          }}
        />
        <p>Filter</p>
      </div>
      <hr />
      {options.map((option) => (
        <div key={option.id} className="flex gap-2">
          <input
            type="checkbox"
            checked={filters[option.id]}
            onChange={() => {
              const newFilters = handleFilter(option.id);
              setFilter(newFilters);
            }}
          />
          <p>{option.label}</p>
        </div>
      ))}
    </>
  );

  return <DropdownButton button={button}>{children}</DropdownButton>;
};

export default FilterButton;
