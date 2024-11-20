import { useState, useRef, useEffect, ReactNode } from "react";

import classNames from "classnames";
interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options: {
    id: string;
    item: string | JSX.Element | ReactNode;
  }[];
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  value,
  onChange,
  className,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false); // dropdown menu is open or not
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const inputClassName = classNames(
    className || "rounded-md",
    "w-full border bg-gray-600 p-2 border-gray-500",
  );

  return (
    <div className="relative" ref={ref}>
      <div className={inputClassName} onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.id === value)?.item || (
          <div className="text-center">
            <span className="text-gray-400">Select</span>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 min-w-full rounded-md border border-gray-500 bg-gray-600">
          <div className="m-2 flex flex-col gap-1">
            {options.map((option) => (
              <button
                key={option.id}
                className="w-full text-left"
                onClick={() => onChange(option.id)}
                onMouseDown={(e) => e.preventDefault()} // Prevent text selection on double click
              >
                {option.item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
