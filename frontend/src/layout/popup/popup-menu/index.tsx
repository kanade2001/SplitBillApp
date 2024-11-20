import React, { useEffect } from "react";

interface PopupMenuProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ isOpen, close, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the popup when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="max-h-[80vh] w-[80vw] rounded-lg border border-gray-500 bg-gray-800 p-4"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};

export default PopupMenu;
