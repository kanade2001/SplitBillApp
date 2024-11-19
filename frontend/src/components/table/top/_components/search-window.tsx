import { useState } from "react";

import { SearchIcon } from "@/assets/icons";

interface SearchProps {
  setSearch: (search: string) => void;
}

const SearchWindow: React.FC<SearchProps> = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="flex h-6 w-full items-center justify-center gap-2 rounded-lg bg-gray-600 px-2 focus-within:ring-2 focus-within:ring-blue-500">
      <SearchIcon className="h-4 w-4 text-gray-200" />
      <input
        type="text"
        className="h-4 flex-1 bg-gray-600 p-2 text-sm text-gray-200 focus:outline-none"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchWindow;
