import { useState } from "react";

export const useTextForm = (
  initiaiValue: string = "",
  errorValues: string[] = [""],
) => {
  const [value, setValue] = useState<string>(initiaiValue);
  const [error, setError] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleError = () => {
    if (!errorValues.includes(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return {
    value,
    error,
    onChange,
    handleError,
  };
};
