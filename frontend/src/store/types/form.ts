export interface FormType {
  error: boolean;
  status: string;
}

export interface FormProps {
  id: string;
  label: string;
  type: "text" | "number" | "email" | "password";
}

export const MemberFormProps: FormProps[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "role", label: "Role", type: "text" },
];
