import { useReducer } from "react";
import { memberListReducer } from "../reducers/member-list";
import { Member } from "../types/member";

interface UseMemberListProps {
  initialMembers?: Member[];
}

export function useMemberList({ initialMembers = [] }: UseMemberListProps) {
  const [state, dispatch] = useReducer(memberListReducer, initialMembers);

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
    members: state,
    addMember,
    editMember,
    deleteMember,
  };
}
