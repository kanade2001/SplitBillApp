import { useState } from "react";

import { TextInput } from "@/components/input";
import { BlockContent, BlockHeaderEdit, RoundedBlock } from "@/layout/block";
import { GridItemEditField } from "@/layout/grid";
import { formStatus } from "@/store/types/form-status";

const GeneralSettings = () => {
  const handleSave = () => true; // TODO: Implement handleSave
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<formStatus>("idle");

  return (
    <RoundedBlock>
      <BlockHeaderEdit
        title="General"
        handleSave={handleSave}
        onStatusChange={(status: formStatus) => setStatus(status)}
      />
      <BlockContent>
        <GridItemEditField>
          <p>Title</p>
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Title"
            required
            disabled={status !== "editing"}
          />
          <p>Start Date</p>
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Title"
            required
            disabled={status !== "editing"}
          />
          <p>End Date</p>
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Title"
            required
            disabled={status !== "editing"}
          />
          <p>Description</p>
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Title"
            required
            disabled={status !== "editing"}
          />
        </GridItemEditField>
      </BlockContent>
    </RoundedBlock>
  );
};

export default GeneralSettings;
