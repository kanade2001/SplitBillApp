"use client";

import Menu from "./_components/menu";

const Header = () => {
  return (
    <header className="bg-blue-900 h-10 flex items-center justify-between">
      <div className="px-5 h-full flex items-center text-white-900">
        <h1>Header</h1>
      </div>
      <div className="h-full">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
