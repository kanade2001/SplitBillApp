import { useState, useEffect } from "react";

import {
  SaveButton,
  EditButton,
  FailedButton,
  SavedButton,
  CancelButton,
} from "@/components/button/_index";
import { formStatus } from "@/store/types/form-status";

interface BlockHeaderEditProps {
  title: string;
  handleSave: () => boolean;
  handleCancel: () => void;
  onStatusChange?: (status: formStatus) => void;
}

const BlockHeaderEdit: React.FC<BlockHeaderEditProps> = ({
  title,
  handleSave,
  handleCancel,
  onStatusChange,
}) => {
  const [status, setStatus] = useState<formStatus>("idle"); // state

  useEffect(() => {
    if (onStatusChange) {
      onStatusChange(status);
    }
  }, [status, onStatusChange]);

  const handleEditClick = () => {
    setStatus("editing");
  }; // change state idle -> editing

  const handleCancelClick = () => {
    setStatus("idle");
    handleCancel();
  }; // change state editing -> idle

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
  }; // change state editing -> saving -> saved or failed

  const handleSaveFailed = () => {
    setStatus("failed");
    setTimeout(() => {
      setStatus("editing");
    }, 3000);
  }; // change state failed -> editing

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
