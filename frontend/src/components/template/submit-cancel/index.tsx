import { ReactNode } from "react";

import { FlexColumn } from "@/components/view";

interface SubmitCancelProps {
  label?: string;
  children: ReactNode;
  handleSubmit: () => void;
  handleDelete?: () => void;
  handleCancel: () => void;
  submitLabel?: string;
}

export const SubmitCancel: React.FC<SubmitCancelProps> = ({
  label,
  children,
  handleSubmit,
  handleDelete,
  handleCancel,
  submitLabel,
}) => {
  return (
    <FlexColumn>
      <h3>{label}</h3>
      {children}
      <div className="flex w-full justify-end gap-2">
        {handleDelete && (
          <button className="w-24 rounded-lg bg-red-600" onClick={handleDelete}>
            削除
          </button>
        )}
        <button className="w-24 rounded-lg bg-gray-600" onClick={handleCancel}>
          キャンセル
        </button>
        <button className="w-24 rounded-lg bg-blue-600" onClick={handleSubmit}>
          {submitLabel || "Confirm"}
        </button>
      </div>
    </FlexColumn>
  );
};

export default SubmitCancel;
