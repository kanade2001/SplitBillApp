interface TextInputProps {
  type?: string;
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  id,
  value,
  onChange,
  className,
  placeholder,
}) => {
  const inputClassName = [
    className || "rounded-md",
    "w-full border border-gray-500 bg-gray-600 p-2",
  ].join(" ");

  return (
    <input
      type={type}
      id={id}
      className={inputClassName}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
