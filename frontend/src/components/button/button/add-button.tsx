import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const AddButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-blue-600" label="Add" />
  );
};

export default AddButton;
