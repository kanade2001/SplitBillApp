"use client";

import { DropdownSelect, TextInput } from "@/components/input";
import FlexBox from "@/components/ui/flex-box";

export default function Debug() {
  return (
    <div>
      <FlexBox cols="[auto_1fr]">
        <DropdownSelect
          value="test"
          onChange={(value) => console.log(value)}
          options={[
            { id: "1", item: "Option 1" },
            { id: "2", item: "Option 2" },
            { id: "3", item: "Option 3" },
          ]}
        />
        <TextInput
          value="test"
          onChange={(event) => console.log(event.target.value)}
        />
      </FlexBox>
    </div>
  );
}
