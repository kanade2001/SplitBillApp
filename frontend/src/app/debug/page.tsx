"use client";

import DropDwown from "@/components/ui/dropdown";

export default function Debug() {
  return (
    <div>
      <h1>Debug</h1>
      <DropDwown items={["Item1", "Item2", "Item3"]} />
    </div>
  );
}
