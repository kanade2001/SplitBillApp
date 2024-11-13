export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type MemberRole = "admin" | "editor" | "viewer" | "guest";
