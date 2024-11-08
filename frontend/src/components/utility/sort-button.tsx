import { SortIcon } from "@/assets/icons/_index";

interface SortProps {}

const FilterButton: React.FC<SortProps> = () => {
  return (
    <button className="flex h-6 w-full items-center justify-center rounded-lg bg-gray-600 px-2">
      <SortIcon className="h-4 w-4 text-gray-200" />
    </button>
  );
};

export default FilterButton;
