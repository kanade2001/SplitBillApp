"use client";

import { DropdownSelect } from "@/components/input";

export default function Debug() {
  return (
    <div>
      <DropdownSelect
        value="test"
        onChange={(value) => console.log(value)}
        options={[
          { id: "1", item: "Option 1" },
          { id: "2", item: "Option 2" },
          { id: "3", item: "Option 3" },
        ]}
      />
    </div>
  );
}
