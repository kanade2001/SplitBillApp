import { useState } from "react";
import { FilterIcon } from "@/assets/icons/_index";
import { useFilter } from "@/store/hooks/useFilter";

interface FilterProps {
  setFilter: () => void;
  options: {
    id: string;
    label: string;
  }[];
}

const FilterButton: React.FC<FilterProps> = ({ setFilter, options }) => {
  const [open, setOpen] = useState(false);
  const { filters, masterFilter, handleFilter, handleMasterFilter } =
    useFilter(options);

  return (
    <div className="relative w-10">
      <button
        className="flex h-6 w-full items-center justify-center rounded-lg bg-gray-600 px-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FilterIcon className="h-4 w-4 text-gray-200" />
      </button>
      {open && (
        <div className="absolute right-0 top-8 rounded-lg bg-gray-700 p-2">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={masterFilter}
              onClick={() => handleMasterFilter()}
            />
            <p>Filter</p>
          </div>
          <hr />
          {options.map((option) => (
            <div key={option.id} className="flex gap-2">
              <input
                type="checkbox"
                checked={filters[option.id]}
                onClick={() => handleFilter(option.id)}
              />
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
