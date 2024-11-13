import { useReducer } from "react";
import { memberReducer } from "../reducers/member";
import { Member, initialMember } from "@/store/types/member";

export function useMember(currentMemberState?: Member) {
  const [state, dispatch] = useReducer(
    memberReducer,
    currentMemberState || initialMember,
  );

  const setMemberField = (field: "name" | "email" | "role", value: string) => {
    dispatch({ type: "SET_FIELD", payload: { field, value } });
  };

  return {
    member: state,
    setMemberField,
  };
}
