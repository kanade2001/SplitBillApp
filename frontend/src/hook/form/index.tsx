import { TextFormType } from "../textform";

interface FormType {
  key: string;
  form: TextFormType;
}

export const useForm = (Forms: FormType[]) => {
  const handleSet = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    Forms.forEach((form) => {
      if (form.key === key) {
        form.form.handleSet(e);
      }
    });
  };

  const handleCheck = () => {
    Forms.forEach((form) => {
      form.form.handleCheck();
    });
  };

  const handleReset = () => {
    Forms.forEach((form) => {
      form.form.handleReset();
    });
  };

  return { handleSet, handleCheck, handleReset };
};
