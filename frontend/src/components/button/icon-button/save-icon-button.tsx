import { IconButtonTemplate } from "./icon-button-template";

import { FloppyDiskIcon } from "@/assets/icons";

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
