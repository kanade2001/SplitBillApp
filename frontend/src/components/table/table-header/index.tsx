interface TableHeaderProps {
  key: string;
  items: {
    key: string;
    className?: string;
    label: string;
  }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ key, items }) => {
  return (
    <thead key={key} className="bg-blue-800 text-white">
      <tr>
        {items.map(({ key, className, label }) => (
          <th
            key={key}
            className={[className, "border border-gray-400 p-2"].join(" ")}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
