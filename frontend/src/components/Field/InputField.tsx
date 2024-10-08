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
      className={`my-2 ${error !== "" ? "rounded border border-red-500" : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none`}
        value={value}
        onChange={onChange}
      />
      {error !== "" ? (
        <p className="text-xs italic text-red-500">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
