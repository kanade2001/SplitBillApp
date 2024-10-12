import { useState } from "react";

interface DropDownProps {
  items: (string | JSX.Element)[];
  value: string | JSX.Element;
  onSelected: (value: string | JSX.Element) => void;
  ParentClassName: string;
  ChildClassName: string;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <div
        className={[
          "flex w-full justify-between rounded-md border px-2 text-sm",
          props.ParentClassName
            ? props.ParentClassName
            : "border-gray-600 text-gray-900",
        ].join(" ")}
      >
        <div>{props.value}</div>
        <button onClick={handleOpen}>
          <AngleDown />
        </button>
      </div>
      {isOpen && (
        <div
          className={[
            "absolute w-full rounded-md border p-2",
            props.ChildClassName
              ? props.ChildClassName
              : "bg-white-100 border-gray-600",
          ].join(" ")}
        >
          <ul className="flex flex-col items-center">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AngleDown = () => {
  return (
    <svg
      className="h-4 w-4 text-gray-800 dark:text-white"
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
        d="m19 9-7 7-7-7"
      />
    </svg>
  );
};

export default DropDown;
