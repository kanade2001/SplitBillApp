import { useState } from "react";

import { ItemState, ItemAction } from "../../_types/type";

import EditRow from "../edit-row";

interface BodyRowProps {
  item: ItemState;
  dispatch: React.Dispatch<ItemAction>;
}

const BodyRow: React.FC<BodyRowProps> = ({ item, dispatch }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleIsEdit = () => {
    console.log("handleIsEdit");
    setIsEdit(!isEdit);
  };

  return (
    <>
      <tr>
        <th className="border border-r-0 border-gray-400 p-2">{}</th>
        <th className="border border-l-0 border-gray-400 p-2 text-left">
          {item.title}
        </th>
        <th className="border border-gray-400 p-2">{item.member}</th>
        <th className="border border-gray-400 p-2">{item.currency}</th>
        <th className="border border-gray-400 p-2 text-right">{item.amount}</th>
        <th className="border border-gray-400 p-2">
          {item.datetime.toISOString()}
        </th>
        <th className="border border-gray-400 p-2">
          <button
            className="flex h-full w-full justify-center"
            onClick={() => handleIsEdit()}
          >
            <EditIcon />
          </button>
        </th>
      </tr>
      {isEdit && (
        <EditRow
          visible={{ add: false, edit: true, delete: true }}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

const EditIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-6 text-gray-800 dark:text-white"
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
        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
      />
    </svg>
  );
};

export default BodyRow;
