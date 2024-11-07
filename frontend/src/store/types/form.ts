export interface FormType {
  error: boolean;
  status: string;
}

export interface FormProps {
  id: string;
  label: string;
  type: "text" | "number" | "email" | "password";
}
