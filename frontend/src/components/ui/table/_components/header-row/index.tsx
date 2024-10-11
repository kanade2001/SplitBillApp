interface HeaderRowItem {
  key?: string;
  content: string | JSX.Element;
  className?: string;
}

const HeaderRow = () => {
  const items: HeaderRowItem[] = [
    {
      content: <PlusIcon />,
      className: "w-10  border-r-0",
    },
    {
      content: "Title",
      className: "border-l-0 ",
    },
    { content: "Member" },
    { content: "Currency", className: "w-28" },
    { content: "Amount" },
    { content: "Date/Time" },
    { content: "Edit", className: "w-16" },
  ];
  return (
    <tr>
      {items.map(({ key, content, className }) => (
        <th
          key={key}
          className={[className, "border border-gray-400 p-2"].join("")}
        >
          {content}
        </th>
      ))}
    </tr>
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
