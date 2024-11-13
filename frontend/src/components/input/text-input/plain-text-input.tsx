interface PlainTextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PlainTextInput: React.FC<PlainTextInputProps> = ({
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

export default PlainTextInput;
