import PlainTextInput from "./plain-text-input";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, error }) => {
  return (
    <PlainTextInput
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
