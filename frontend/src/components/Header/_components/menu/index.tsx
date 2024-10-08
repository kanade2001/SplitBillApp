import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-full">
      <div className="absolute top-0 right-0 px-5 h-full w-20 flex items-center bg-white-900">
        <button onClick={toggleMenu}>User</button>
      </div>
      <nav
        className={
          isOpen ? "absolute top-full right-0 bg-white-100 w-20 p-2" : "hidden"
        }
      >
        <ul className="flex flex-col items-center">
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
}
