interface HeaderProps {
  cols: {
    id: string;
    label: string;
    className?: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ cols }) => {
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
