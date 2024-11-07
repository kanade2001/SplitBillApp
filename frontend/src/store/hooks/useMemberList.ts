import { useReducer } from "react";
import { memberListReducer } from "../reducers/member-list";
import { Member } from "../types/member";

export function useMemberList() {
  const [state, dispatch] = useReducer(memberListReducer, []);

  const addMember = (member: Member) => {
    dispatch({ type: "ADD", payload: { member } });
  };

  const editMember = (id: string, member: Member) => {
    dispatch({ type: "EDIT", payload: { id, member } });
  };

  const deleteMember = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  return {
    memberList: state,
    addMember,
    editMember,
    deleteMember,
  };
}
