import classNames from "classnames";

import { SortIcon } from "@/assets/icons";
import { ArrowUpIcon, ArrowDownIcon } from "@/assets/icons";
import DropdownButton from "@/components/ui/dropdown-menu";
import { useSort } from "@/store/hooks/useSort";

interface SortProps {
  setSort: (sortParam: {
    id: string | null;
    type: "ascending" | "descending" | null;
  }) => void;
  options: { id: string; label: string }[];
}

const SortButton: React.FC<SortProps> = ({ setSort, options }) => {
  const { sort, handleSort } = useSort();

  const button = (
    <button
      className={classNames(
        "flex h-6 w-10 items-center justify-center rounded-lg px-2",
        {
          "bg-blue-600": sort.id,
          "bg-gray-600": !sort.id,
        },
      )}
    >
      <SortIcon className="h-4 w-4 text-gray-200" />
    </button>
  );

  const children = (
    <>
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
            className={classNames("rounded-lg px-2", {
              "bg-red-900": sort.id === option.id && sort.type === "ascending",
              "bg-blue-900":
                sort.id === option.id && sort.type === "descending",
            })}
            onClick={() => {
              const newSort = handleSort(option.id);
              setSort(newSort);
            }}
          >
            {option.label}
          </button>
        </div>
      ))}
    </>
  );

  return <DropdownButton button={button}>{children}</DropdownButton>;
};

export default SortButton;
