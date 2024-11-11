import { useCallback, useEffect, useRef, useState } from "react";
import PopupMenu from "./popup-menu";

const usePopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the popup menu when clicking outside of it
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

  const open = useCallback(() => {
    // Open the popup menu
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // Close the popup menu
    setIsOpen(false);
  }, []);

  const PopupMenuComponent = ({ children }: { children: React.ReactNode }) => {
    // Popup menu component
    return (
      <PopupMenu ref={ref} isOpen={isOpen}>
        {children}
      </PopupMenu>
    );
  };

  return {
    PopupMenuComponent,
    open,
    close,
  };
};

export default usePopupMenu;
