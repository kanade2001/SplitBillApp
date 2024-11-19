import { useState } from "react";

import { TextInput } from "@/components/input";
import { BlockContent, BlockHeaderEdit, RoundedBlock } from "@/layout/block";
import { GridItemEditField } from "@/layout/grid";
import useResettableKey from "@/store/hooks/utils/use-resettable-key";
import { formStatus } from "@/store/types/form-status";

const GeneralSettings = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<formStatus>("idle");
  const [key, resetKey] = useResettableKey();

  const handleSave = () => true; // TODO: Implement handleSave

  const handleCancel = () => {
    resetKey();
  };

  return (
    <RoundedBlock>
      <BlockHeaderEdit
        title="General"
        handleSave={handleSave}
        handleCancel={handleCancel}
        onStatusChange={(status: formStatus) => setStatus(status)}
      />
      <BlockContent key={key}>
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
