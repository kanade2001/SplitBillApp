import { Member } from "../types/member";
import { MemberAction } from "../actions/member";

export function memberReducer(state: Member, action: MemberAction): Member {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      throw new Error("Unhandled action type");
  }
}
