interface HeaderRowItem {
  key?: string;
  content: string | JSX.Element;
  className?: string;
}

const HeaderRow = () => {
  const items: HeaderRowItem[] = [
    {
      key: "icon",
      content: <PlusIcon />,
      className: "w-10  border-r-0",
    },
    {
      key: "title",
      content: "Title",
      className: "border-l-0",
    },
    { key: "member", content: "Member" },
    { key: "currency", content: "Currency", className: "w-28" },
    { key: "amount", content: "Amount" },
    { key: "datetime", content: "Date/Time" },
    { key: "editicon", content: "Edit", className: "w-16" },
  ];
  return (
    <thead className="bg-blue-800 text-white">
      <tr>
        {items.map(({ key, content, className }) => (
          <th
            key={key}
            className={[className, "border border-gray-400 p-2"].join(" ")}
          >
            {content}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const PlusIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-6 text-gray-800 text-white"
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
        strokeLinejoin="round"
        strokeWidth="2"
        rx="1"
      />
    </svg>
  );
};

export default HeaderRow;
