export interface Member {
  id: string;
  name: string;
  mail: string;
  role: string;
}

export const initialMember: Member = {
  id: "",
  name: "",
  mail: "",
  role: "",
};

export type MemberRole = "admin" | "editor" | "viewer" | "guest";
