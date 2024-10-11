import React from "react";

interface TableProps {
  header: { content: string | JSX.Element; className: string }[];
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className="w-full table-fixed border border-gray-400">
      <thead className="bg-blue-800 text-white">
        <tr className="">
          {props.header.map(({ content, className = "" }) => (
            <th key={className} className={className}>
              {content}
            </th>
          ))}
        </tr>
      </thead>
      <tfoot className="bg-gray-800 text-white">
        <tr></tr>
      </tfoot>
    </table>
  );
};

export default Table;
