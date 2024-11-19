import { useState } from "react";

import { DateInput, TextInput } from "@/components/input";
import { BlockContent, BlockHeaderEdit, RoundedBlock } from "@/layout/block";
import { GridItemEditField } from "@/layout/grid";
import { useTrip } from "@/store/hooks/useTrip";
import useResettableKey from "@/store/hooks/utils/use-resettable-key";
import { formStatus } from "@/store/types/form-status";

const GeneralSettings = () => {
  const [status, setStatus] = useState<formStatus>("idle");
  const [key, resetKey] = useResettableKey();
  const { state, setTripField, updateTrip } = useTrip("TRIP_ID");

  const handleSave = () => {
    updateTrip();
    return true;
  }; // TODO: Implement handleSave

  const handleCancel = () => {
    resetKey();
  };

  return (
    <RoundedBlock>
      <BlockHeaderEdit
        title="General"
        handleSave={handleSave}
        handleCancel={handleCancel}
        status={status}
        setStatus={setStatus}
      />
      <BlockContent key={key}>
        <GridItemEditField>
          <p>Title</p>
          <TextInput
            value={state.title}
            onChange={(value) => setTripField("title", value)}
            required
            disabled={status !== "editing"}
          />
          <p>Start Date</p>
          <DateInput
            value={state.start_date}
            onChange={(value) => setTripField("start_date", value)}
            required
            disabled={status !== "editing"}
          />
          <p>End Date</p>
          <DateInput
            value={state.end_date}
            onChange={(value) => setTripField("end_date", value)}
            placeholder="Description"
            required
            disabled={status !== "editing"}
          />
          <p>Description</p>
          <TextInput
            value={state.description}
            onChange={(value) => setTripField("description", value)}
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
