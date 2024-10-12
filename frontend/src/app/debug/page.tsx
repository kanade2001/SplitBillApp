"use client";

// import DropDwown from "@/components/ui/dropdown";

import { useState } from "react";

export default function Debug() {
  const [value, setValue] = useState("hello");

  return (
    <div>
      <h1>Debug</h1>
      {/*<DropDwown items={["Item1", "Item2", "Item3"]} />*/}
      <select className="flex w-full justify-between rounded-md border border-gray-600 px-2 text-sm">
        <option value="hello">hello</option>
        <option value="world">world</option>
      </select>

      <select
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      {value}
    </div>
  );
}
