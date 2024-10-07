import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <div
      className={`my-2 ${error !== "" ? "border rounded border-red-500" : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        value={value}
        onChange={onChange}
      />
      {error !== "" ? (
        <p className="text-red-500 text-xs italic">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
