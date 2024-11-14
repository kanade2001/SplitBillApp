export interface FormProps {
  id: string;
  label: string;
  type: "text" | "number" | "mail" | "password";
  validation: {
    accept?: string[];
    refuse?: string[];
  };
}

export const MemberFormProps: FormProps[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    validation: { refuse: [""] },
  },
  {
    id: "mail",
    label: "Mail",
    type: "mail",
    validation: { accept: ["[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+"] },
  },
  {
    id: "role",
    label: "Role",
    type: "text",
    validation: { accept: ["admin", "member"] },
  },
];
