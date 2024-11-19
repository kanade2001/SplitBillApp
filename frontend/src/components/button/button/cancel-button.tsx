import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const CancelButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-gray-500" label="Cancel" />
  );
};

export default CancelButton;
