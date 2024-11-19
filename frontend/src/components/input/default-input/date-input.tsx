import { DefaultInput } from "./default-input";

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ onChange, ...props }) => {
  const handleChange = (value: string | number) => {
    onChange(value as string);
  };

  return <DefaultInput type="date" onChange={handleChange} {...props} />;
};

export default DateInput;
