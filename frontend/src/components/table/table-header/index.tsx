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
        <th key="icon" className="w-10 border border-r-0 border-gray-400 p-2">
          <StopIcon />
        </th>
        {items.map(({ key, className, label }) => (
          <th
            key={key}
            className={[
              className,
              "border border-l-0 border-gray-400 p-2",
            ].join(" ")}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const StopIcon: React.FC = () => {
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
      <rect
        width="12"
        height="12"
        x="6"
        y="6"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        rx="1"
      />
    </svg>
  );
};

export default TableHeader;
