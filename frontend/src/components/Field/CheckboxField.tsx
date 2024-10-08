import { ChangeEvent } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const CheckboxField: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  error,
}) => {
  return (
    <div
      className={`my-2 ${error !== "" ? "rounded border border-red-500" : ""}`}
    >
      <input
        type="checkbox"
        id={id}
        className="forcus:ring-blue-500 rounded focus:ring-2"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="terms" className="ml-2">
        I agee to the &nbsp;
        {/* TODO 利用規約へのリンクの確認 */}
        <a href="/terms" className="text-blue-500 hover:underline">
          Terms and Conditions
        </a>
      </label>
      {error !== "" ? (
        <p className="text-xs italic text-red-500">{error}</p>
      ) : null}
    </div>
  );
};

export default CheckboxField;
