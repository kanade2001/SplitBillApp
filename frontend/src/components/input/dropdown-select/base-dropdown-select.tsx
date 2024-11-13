import { useState, useRef, useEffect } from "react";

interface BaseDropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options: {
    id: string;
    item: string | JSX.Element;
  }[];
}

const BaseDropdownSelect: React.FC<BaseDropdownSelectProps> = ({
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

  return (
    <div className="relative" ref={ref}>
      <div
        className={["w-full border bg-gray-600 p-1", className].join(" ")}
        onClick={() => setIsOpen(!isOpen)}
      >
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

export default BaseDropdownSelect;
