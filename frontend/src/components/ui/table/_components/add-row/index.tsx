import { useState, Key } from "react";

interface ItemState {
  id: Key;
  title: string;
  member: string;
  member_id: bigint;
  currency: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

type ItemAction =
  | { type: "ADD_ITEM"; payload: { item: ItemState } }
  | { type: "EDIT_ITEM"; payload: { item: ItemState } }
  | { type: "DELETE_ITEM"; payload: { id: Key } };

interface TableProps {
  dispatch: React.Dispatch<ItemAction>;
}

import EditRow from "../edit-row";

const AddRow: React.FC<TableProps> = ({ dispatch }) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const handleIsAdd = () => {
    setIsAdd(!isAdd);
  };

  return (
    <>
      <tr>
        <th className="border border-r-0 border-gray-400 bg-gray-800">
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
        </th>
        <th
          colSpan={6}
          className="border border-l-0 border-gray-400 bg-gray-800 text-white"
        >
          <button
            className="h-full w-full p-2 text-left"
            onClick={() => handleIsAdd()}
          >
            Add
          </button>
        </th>
      </tr>
      {isAdd && <EditRow dispatch={dispatch} />}
    </>
  );
};

export default AddRow;
