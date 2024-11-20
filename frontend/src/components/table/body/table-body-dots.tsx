import classNames from "classnames";

import { DotsHorizonIcon } from "@/assets/icons";
interface TableBodyDotsProps {
  rows: {
    id: string;
    columns: (string | JSX.Element)[];
    actions: () => void;
  }[];
  centerColumns?: number[]; // 中央寄せする列
}

const TableBodyDots: React.FC<TableBodyDotsProps> = ({
  rows,
  centerColumns,
}) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} className="h-10 border-y border-gray-500">
          {row.columns.map((column, index) => (
            <td
              key={index}
              className={classNames("px-2", {
                "text-center": centerColumns?.includes(index),
              })}
            >
              {column}
            </td>
          ))}
          <td className="px-2">
            <button className="flex items-center" onClick={row.actions}>
              <DotsHorizonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyDots;
