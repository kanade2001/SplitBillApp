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
    case "SORT":
      const { sortBy, order } = action.payload;
      return [...state].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return order === "ascending" ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return order === "ascending" ? 1 : -1;
        }
        return 0;
      });
    default:
      throw new Error("Unhandled action type");
  }
}
