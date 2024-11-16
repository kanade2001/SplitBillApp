import { useReducer } from "react";

import { Member, initialMember } from "@/store/types/member";

import { memberReducer } from "../reducers/member";

export function useMember(currentMemberState?: Member) {
  const [state, dispatch] = useReducer(
    memberReducer,
    currentMemberState || initialMember,
  );

  const setMemberField = (field: "name" | "mail" | "role", value: string) => {
    dispatch({ type: "SET_FIELD", payload: { field, value } });
  };

  return {
    member: state,
    setMemberField,
  };
}
