import { ButtonTemplate } from "./button-template";
import { ButtonProps } from "./button-type";

const SavedButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonTemplate onClick={onClick} className="bg-green-600" label="Saved" />
  );
};

export default SavedButton;
