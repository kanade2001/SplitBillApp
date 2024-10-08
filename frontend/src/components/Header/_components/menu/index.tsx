import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-full">
      <div className="bg-white-900 absolute right-0 top-0 flex h-full w-20 items-center px-5">
        <button onClick={toggleMenu}>User</button>
      </div>
      <nav
        className={
          isOpen ? "bg-white-100 absolute right-0 top-full w-20 p-2" : "hidden"
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
