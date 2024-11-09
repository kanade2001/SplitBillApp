import { useState } from "react";
import { useSort } from "@/store/hooks/useSort";
import { SortIcon } from "@/assets/icons/_index";
import { ArrowUpIcon, ArrowDownIcon } from "@/assets/icons/_index";

interface SortProps {
  setSort: (sortParam: {
    id: string | null;
    type: "ascending" | "descending" | null;
  }) => void;
  options: { id: string; label: string }[];
}

const FilterButton: React.FC<SortProps> = ({ setSort, options }) => {
  const [open, setOpen] = useState(false);
  const { sort, handleSort } = useSort();

  return (
    <div className="relative w-10">
      <button
        className={[
          "flex h-6 w-full items-center justify-center rounded-lg px-2",
          sort.id ? "bg-blue-600" : "bg-gray-600",
        ].join(" ")}
        onClick={() => setOpen(!open)}
      >
        <SortIcon className="h-4 w-4 text-gray-200" />
      </button>
      {open && (
        <div className="absolute right-0 top-8 rounded-lg bg-gray-700 p-2">
          <div className="flex w-full items-center gap-2">
            <div className="flex h-4 w-4 items-center">
              {sort.type === "ascending" ? (
                <ArrowUpIcon className="h-4 w-4 text-gray-200" />
              ) : sort.type === "descending" ? (
                <ArrowDownIcon className="h-4 w-4 text-gray-200" />
              ) : (
                <></>
              )}
            </div>
            {sort.id ? (
              <p className="px-2 py-1">
                {options.find((option) => option.id === sort.id)?.label}
              </p>
            ) : (
              <p className="px-2 py-1">Sort</p>
            )}
          </div>
          <hr />
          {options.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center">
                {sort.id === option.id ? (
                  sort.type === "ascending" ? (
                    <ArrowUpIcon className="h-4 w-4 text-gray-200" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-gray-200" />
                  )
                ) : (
                  <></>
                )}
              </div>
              <button
                className={[
                  "rounded-lg px-2",
                  sort.id === option.id &&
                    (sort.type === "ascending" ? "bg-red-900" : "bg-blue-900"),
                ].join(" ")}
                onClick={() => {
                  const newSort = handleSort(option.id);
                  setSort(newSort);
                }}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
