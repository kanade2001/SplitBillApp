import BaseTextInput from "./base-text-input";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, error }) => {
  return (
    <BaseTextInput
      value={value}
      onChange={onChange}
      className={[
        "rounded-md",
        error ? "border-red-500" : "border-gray-500",
      ].join(" ")}
    />
  );
};

export default TextInput;
