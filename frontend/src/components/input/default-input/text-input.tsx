import { DefaultInput } from "./default-input";

interface TextInputProps {
  type?: "email" | "password";
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ type, onChange, ...props }) => {
  const handleChange = (value: string | number) => {
    onChange(value as string);
  };

  return (
    <DefaultInput type={type || "text"} onChange={handleChange} {...props} />
  );
};

export default TextInput;
