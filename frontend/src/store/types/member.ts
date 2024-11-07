import { FormProps } from "./form";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const MemberFormProps: FormProps[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "role", label: "Role", type: "text" },
];
