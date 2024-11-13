import BaseDropdownSelect from "./base-dropdown-select";

interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    id: string;
    item: string | JSX.Element;
  }[];
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <BaseDropdownSelect
      value={value}
      onChange={onChange}
      className={["rounded", "border-gray-600"].join(" ")}
      options={options}
    />
  );
};

export default DropdownSelect;
