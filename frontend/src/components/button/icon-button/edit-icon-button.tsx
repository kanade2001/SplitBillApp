import { IconButtonTemplate } from "./icon-button-template";

import { EditIcon } from "@/assets/icons";

interface EditButtonProps {
  onClick: () => void;
}

const EditIconButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <IconButtonTemplate
      onClick={onClick}
      className="bg-gray-500"
      icon={EditIcon}
      label="Edit"
    />
  );
};

export default EditIconButton;
