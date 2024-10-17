import { useState } from "react";

interface TableAddFooterProps {
  key: string;
  items: {
    key: string;
    form: JSX.Element;
  }[];
}

const TableAddFooter: React.FC<TableAddFooterProps> = ({ key, items }) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const handleIsAdd = () => {
    setIsAdd(!isAdd);
  };

  return (
    <tfoot key={key}>
      <tr className="border border-r-0 border-gray-400 bg-gray-800">
        <th>
          <PlusIcon />
        </th>
        <th
          colSpan={items.length + 1}
          className="border border-l-0 border-gray-400 bg-gray-800 text-white"
        >
          <button
            className="h-full w-full p-2 text-left"
            onClick={() => handleIsAdd()}
          >
            {isAdd ? "Cancel" : "Add"}
          </button>
        </th>
      </tr>
      {isAdd && (
        <tr className="bg-gray-400">
          <th></th>
          {items &&
            items.map((item) => {
              return (
                <th key={item.key} className="p-2">
                  {item.form}
                </th>
              );
            })}
          <th></th>
        </tr>
      )}
    </tfoot>
  );
};

const PlusIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-full text-gray-800 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m-7 7V5"
      />
    </svg>
  );
};

export default TableAddFooter;
