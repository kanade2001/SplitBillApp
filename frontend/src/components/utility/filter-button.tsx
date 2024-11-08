import { FilterIcon } from "@/assets/icons/_index";

interface FilterProps {}

const FilterButton: React.FC<FilterProps> = () => {
  return (
    <button className="flex h-6 w-full items-center justify-center rounded-lg bg-gray-600 px-2">
      <FilterIcon className="h-4 w-4 text-gray-200" />
    </button>
  );
};

export default FilterButton;
