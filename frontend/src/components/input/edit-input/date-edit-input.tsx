import { useState } from "react";

interface DateEditInputProps {
  value: string; // ISO8601
  className?: string;
  handleSave: (value: string) => void;
}

const DateEditInput: React.FC<DateEditInputProps> = ({
  value,
  className,
  handleSave,
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="flex">
      <input
        type="date"
        className={["w-full rounded-s-md bg-gray-600 p-2", className].join(" ")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => handleSave(inputValue)}
      />
    </div>
  );
};

export default DateEditInput;
