import { forwardRef } from "react";

interface PopupMenuProps {
  children: React.ReactNode; // The children of the popup menu
  isOpen: boolean; // Whether the popup menu is open
}

const PopupMenu = forwardRef<HTMLDivElement, PopupMenuProps>( // Forwarding ref to the div element
  ({ children, isOpen }, ref) => {
    if (!isOpen) return null; // Do not render if not open

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        {/* This is a popup menu that is displayed in the center of the screen */}
        <div
          className="max-h-[80vh] w-[80vw] rounded-lg border border-gray-500 bg-gray-800 p-4"
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  },
);

PopupMenu.displayName = "PopupMenu";

export default PopupMenu;
