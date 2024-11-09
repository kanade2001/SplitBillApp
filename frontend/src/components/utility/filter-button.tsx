import { useEffect, useRef, useState } from "react";
import { FilterIcon } from "@/assets/icons/_index";
import { useFilter } from "@/store/hooks/useFilter";

interface FilterProps {
  setFilter: (filterParam: {}) => void;
  options: {
    id: string;
    label: string;
  }[];
}

const FilterButton: React.FC<FilterProps> = ({ setFilter, options }) => {
  const [open, setOpen] = useState(false);
  const { filters, masterFilter, handleFilter, handleMasterFilter } =
    useFilter(options);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative w-10">
      <button
        className={[
          "flex h-6 w-full items-center justify-center rounded-lg px-2",
          Object.values(filters).every((filter) => filter)
            ? "bg-gray-600"
            : "bg-blue-600",
        ].join(" ")}
        onClick={() => setOpen(!open)}
      >
        <FilterIcon className="h-4 w-4 text-gray-200" />
      </button>
      {open && (
        <div
          className="absolute right-0 top-8 rounded-lg bg-gray-700 p-2"
          ref={ref}
        >
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
        </div>
      )}
    </div>
  );
};

export default FilterButton;
