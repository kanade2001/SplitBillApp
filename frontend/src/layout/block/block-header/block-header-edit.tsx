import { useState } from "react";

import {
  SaveButton,
  EditButton,
  FailedButton,
  SavedButton,
  CancelButton,
} from "@/components/button/_index";

interface BlockHeaderEditProps {
  title: string;

  handleSave: () => boolean;
}

const BlockHeaderEdit: React.FC<BlockHeaderEditProps> = ({
  title,
  handleSave,
}) => {
  const [status, setStatus] = useState<
    "idle" | "editing" | "saving" | "saved" | "failed"
  >("idle");

  const handleEditClick = () => {
    setStatus("editing");
  };

  const handleCancelClick = () => {
    setStatus("idle");
  };

  const handleSaveClick = async () => {
    setStatus("saving");
    try {
      const success = await handleSave();
      if (success) {
        setStatus("saved");
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        handleSaveFailed();
      }
    } catch (error) {
      console.log(error);
      handleSaveFailed();
    }
  };

  const handleSaveFailed = () => {
    setStatus("failed");
    setTimeout(() => {
      setStatus("editing");
    }, 3000);
  };

  return (
    <div className="flex w-full items-center justify-between p-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="flex gap-2">
        {status === "editing" && <CancelButton onClick={handleCancelClick} />}
        {status === "editing" && <SaveButton onClick={handleSaveClick} />}
        {status === "saving" && <p>Saving...</p>}
        {status === "saved" && <SavedButton onClick={() => {}} />}
        {status === "failed" && <FailedButton onClick={() => {}} />}
        {status === "idle" && <EditButton onClick={handleEditClick} />}
      </div>
    </div>
  );
};

export default BlockHeaderEdit;
