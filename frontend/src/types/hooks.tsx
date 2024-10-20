import { useState } from "react";

export const useTextForm = (
  initiaiValue: string = "",
  errorValues: string[] = [""],
) => {
  const [value, setValue] = useState<string>(initiaiValue);
  const [error, setError] = useState<boolean>(false);

  const handleSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCheck = () => {
    if (!errorValues.includes(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleReset = () => {
    setValue(initiaiValue);
    setError(false);
  };

  return {
    value,
    error,
    handleSet,
    handleCheck,
    handleReset,
  };
};
