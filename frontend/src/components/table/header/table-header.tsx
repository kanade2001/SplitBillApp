interface TableHeaderProps {
  cols: {
    id: string;
    label: string;
    className?: string;
  }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ cols }) => {
  return (
    <thead className="h-10 bg-gray-600">
      <tr>
        {cols.map((col) => (
          <th key={col.label} className={col.className}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
