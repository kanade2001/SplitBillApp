import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const EditButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-gray-500" label="Edit" />
  );
};

export default EditButton;
