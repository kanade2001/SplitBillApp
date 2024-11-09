import {
  SearchWindow,
  FilterButton,
  SortButton,
} from "@/components/utility/_index";

interface SFSProps {
  setSearch: (searchParam: string) => void;
  setFilter: (filterParam: {}) => void;
  setSort: (sortParam: {
    id: string | null;
    type: "ascending" | "descending" | null;
  }) => void;
  filterOptions: { id: string; label: string }[];
  sortOptions: { id: string; label: string }[];
}

const SearchFilterSort: React.FC<SFSProps> = ({
  setSearch,
  setFilter,
  setSort,
  filterOptions,
  sortOptions,
}) => {
  return (
    <div className="flex h-10 w-full items-center justify-between gap-2">
      <div className="flex-1">
        <SearchWindow setSearch={setSearch} />
      </div>

      <FilterButton setFilter={setFilter} options={filterOptions} />

      <div className="w-10">
        <SortButton setSort={setSort} options={sortOptions} />
      </div>
    </div>
  );
};

export default SearchFilterSort;
