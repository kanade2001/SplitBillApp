import { useState, useRef, useEffect } from "react";

interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  rounded?: string;
  options: {
    id: string;
    item: string | JSX.Element;
  }[];
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  value,
  onChange,
  className,
  rounded,
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

  const inputClassName = [
    className,
    rounded || "rounded-md",
    "w-full border bg-gray-600 p-1 border-gray-500",
  ].join(" ");

  return (
    <div className="relative" ref={ref}>
      <div className={inputClassName} onClick={() => setIsOpen(!isOpen)}>
        {value}
      </div>
      {isOpen && (
        <div className="absolute left-0 min-w-full rounded-md border border-gray-500 bg-gray-600">
          {options.map((option) => (
            <div
              key={option.id}
              className="p-1"
              onClick={() => onChange(option.id)}
            >
              {option.item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
