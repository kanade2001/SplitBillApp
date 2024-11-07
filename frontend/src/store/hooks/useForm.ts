import { useState } from "react";

export function useForm(validation: { accept?: string[]; refuse?: string[] }) {
  const [value, setValue] = useState<string | number | boolean | Date>("");
  const [error, setError] = useState<boolean>(false);

  const validate = () => {
    if (validation.accept) {
      for (const pattern of validation.accept) {
        if (!new RegExp(pattern).test(value.toString())) {
          setError(true);
          return;
        }
      }
    }
    if (validation.refuse) {
      for (const pattern of validation.refuse) {
        if (new RegExp(pattern).test(value.toString())) {
          setError(true);
          return;
        }
      }
    }
  };

  const reset = () => {
    setValue("");
    setError(false);
  };

  return {
    value,
    error,
    setValue,
    validate,
    reset,
  };
}
