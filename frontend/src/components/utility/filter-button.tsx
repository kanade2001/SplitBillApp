import { FilterIcon } from "@/assets/icons/_index";

interface FilterProps {
  onClick: () => void;
}

const FilterButton: React.FC<FilterProps> = ({ onClick }) => {
  return (
    <button
      className="flex h-6 w-full items-center justify-center rounded-lg bg-gray-600 px-2"
      onClick={onClick}
    >
      <FilterIcon className="h-4 w-4 text-gray-200" />
    </button>
  );
};

export default FilterButton;
