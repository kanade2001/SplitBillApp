interface BaseTextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <input
      className={["w-full border bg-gray-600 p-1", className].join(" ")}
      value={value}
      onChange={onChange}
    />
  );
};

export default BaseTextInput;
