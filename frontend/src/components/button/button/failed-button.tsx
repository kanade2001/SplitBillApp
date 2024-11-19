import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const FailedButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-red-600" label="Failed" />
  );
};

export default FailedButton;
