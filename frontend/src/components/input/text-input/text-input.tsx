interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  rounded?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  className,
  rounded,
}) => {
  const inputClassName = [
    className,
    rounded || "rounded-md",
    "w-full border border-gray-500 bg-gray-600 p-1",
  ].join(" ");

  return <input className={inputClassName} value={value} onChange={onChange} />;
};

export default TextInput;
