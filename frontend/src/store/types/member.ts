export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const initialMember: Member = {
  id: "",
  name: "",
  email: "",
  role: "",
};

export type MemberRole = "admin" | "editor" | "viewer" | "guest";
