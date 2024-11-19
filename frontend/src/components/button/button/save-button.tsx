import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const SaveButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-blue-600" label="Save" />
  );
};

export default SaveButton;
