import { Member } from "../types/member";
import { MemberListAction } from "../actions/member-list";

export function memberListReducer(
  state: Member[],
  action: MemberListAction,
): Member[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload.member];
    case "EDIT":
      return state.map((member) =>
        member.id === action.payload.member.id ? action.payload.member : member,
      );
    case "DELETE":
      return state.filter((member) => member.id !== action.payload.id);
    default:
      throw new Error("Unhandled action type");
  }
}
