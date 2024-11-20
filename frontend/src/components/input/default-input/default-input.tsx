import { useState } from "react";

import classNames from "classnames";

interface InputProps {
  type: "text" | "number" | "email" | "password" | "date";
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const DefaultInput: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  className,
  placeholder,
  required,
  disabled,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleBlur = () => {
    if (required && !value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <input
      type={type}
      className={classNames(
        "w-full rounded-md border bg-gray-600 px-2 py-1",
        {
          "border-red-500": error,
          "border-gray-600": !error,
        },
        className,
      )}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={handleBlur}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};
