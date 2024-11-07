import { Member } from "../types/member";

export type MemberAction = {
  type: "SET_FIELD";
  payload: { field: keyof Member; value: string };
};
