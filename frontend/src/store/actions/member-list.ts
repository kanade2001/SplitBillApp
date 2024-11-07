import { Member } from "../types/member";

export type MemberListAction =
  | { type: "ADD"; payload: { member: Member } }
  | { type: "EDIT"; payload: { id: string; member: Member } }
  | { type: "DELETE"; payload: { id: string } };
