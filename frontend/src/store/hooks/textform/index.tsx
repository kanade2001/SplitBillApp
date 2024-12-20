import { useState } from "react";

export interface TextFormType {
  value: string;
  error: boolean;
  handleSet: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: () => boolean;
  handleReset: () => void;
}

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
    if (errorValues.includes(value)) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
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
