interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  className,
}) => {
  const inputClassName = [
    className || "rounded-md",
    "w-full border border-gray-500 bg-gray-600 p-2",
  ].join(" ");

  return <input className={inputClassName} value={value} onChange={onChange} />;
};

export default TextInput;
