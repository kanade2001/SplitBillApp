import { FloppyDiskIcon } from "@/assets/icons";

import { IconButtonTemplate } from "./icon-button-template";

interface SaveButtonProps {
  onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <IconButtonTemplate
      onClick={onClick}
      className="bg-blue-600"
      icon={FloppyDiskIcon}
      label="Save"
    />
  );
};

export default SaveButton;
