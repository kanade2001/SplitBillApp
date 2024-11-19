import { useState } from "react";

import { TextInput } from "@/components/input";

import { BlockContent, BlockHeaderEdit, RoundedBlock } from "@/layout/block";
import { GridItemEditField } from "@/layout/grid";

const GeneralSettings = () => {
  const handleSave = () => true; // TODO: Implement handleSave
  const [title, setTitle] = useState("");

  return (
    <RoundedBlock>
      <BlockHeaderEdit title="General" handleSave={handleSave} />
      <BlockContent>
        <GridItemEditField>
          <p>Title</p>
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Title"
            required
          />
        </GridItemEditField>
      </BlockContent>
    </RoundedBlock>
  );
};

export default GeneralSettings;
