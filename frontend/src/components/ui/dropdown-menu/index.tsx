import { useState, useEffect, useRef, ReactNode } from "react";

interface DropdownButtonProps {
  parent: ReactNode;
  children: ReactNode;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  parent,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(!open)}>{parent}</div>
      {open && (
        <div
          className="absolute right-0 top-8 rounded-lg bg-gray-700 p-2"
          ref={ref}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
