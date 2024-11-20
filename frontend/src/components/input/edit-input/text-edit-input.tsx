import { useState } from "react";

import classNames from "classnames";
interface TextEditInputProps {
  type?: string;
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TextEditInput: React.FC<TextEditInputProps> = ({
  type = "text",
  id,
  value,
  onChange,
  className,
  placeholder,
}) => {
  const [status, setStatus] = useState<
    "waiting" | "editing" | "saving" | "saved"
  >("waiting");

  const handleEditClick = () => {
    setStatus("editing");
  };

  const handleSaveClick = () => {
    setStatus("saved");
    setTimeout(() => {
      setStatus("waiting");
    }, 3000);
  };

  return (
    <div className="flex">
      <input
        type={type}
        id={id}
        className={classNames("w-full rounded-s-md bg-gray-600 p-2", className)}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        disabled={status !== "editing"}
      />
      <button
        className={classNames("w-16 rounded-e-md p-2", {
          "bg-gray-500 text-white": status === "waiting",
          "bg-blue-600 text-white": status === "editing",
          "bg-green-600 text-white": status === "saved",
        })}
        onClick={status === "waiting" ? handleEditClick : handleSaveClick}
      >
        {status === "waiting" && "Edit"}
        {status === "editing" && "Save"}
        {status === "saved" && "Saved"}
      </button>
    </div>
  );
};

export default TextEditInput;
