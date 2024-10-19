import { useState } from "react";

interface TableAddFooterProps {
  key: string;
  items: {
    key: string;
    form: JSX.Element;
  }[];
  actions: {
    AddItem: () => void;
    ResetItem: () => void;
  };
}

const TableAddFooter: React.FC<TableAddFooterProps> = ({
  key,
  items,
  actions,
}) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

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
            onClick={() => setIsAdd(!isAdd)}
          >
            {isAdd ? "Cancel" : "Add"}
          </button>
        </th>
      </tr>
      {isAdd && (
        <>
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
          <tr className="bg-gray-400">
            <th></th>
            <th colSpan={items.length}>
              <div className="flex justify-end p-2">
                <button
                  className="x-20 ms-2 rounded-md bg-gray-800 px-2 text-center text-sm text-white"
                  onClick={() => actions.ResetItem()}
                >
                  Reset
                </button>
                <button
                  className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                  onClick={() => actions.AddItem()}
                >
                  Add
                </button>
              </div>
            </th>
            <th></th>
          </tr>
        </>
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
