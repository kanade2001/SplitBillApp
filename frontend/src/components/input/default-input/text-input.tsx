import { DefaultInput } from "./default-input";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, ...props }) => {
  const handleChange = (value: string | number) => {
    onChange(value as string);
  };

  return <DefaultInput type="text" onChange={handleChange} {...props} />;
};

export default TextInput;
