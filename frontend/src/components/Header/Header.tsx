"use client";

import Menu from "./_components/menu";

const Header = () => {
  return (
    <header className="flex h-10 items-center justify-between bg-blue-900">
      <div className="text-white-900 flex h-full items-center px-5">
        <h1>Header</h1>
      </div>
      <div className="h-full">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
