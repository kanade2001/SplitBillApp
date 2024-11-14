import { useReducer, useEffect, useState } from "react";
import { memberListReducer } from "../reducers/member-list";
import { Member } from "../types/member";

interface UseMemberListProps {
  initialMembers?: Member[];
}

export function useMemberList({ initialMembers = [] }: UseMemberListProps) {
  const [state, dispatch] = useReducer(memberListReducer, initialMembers);
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [filter, setFilter] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setMembers(
      state.filter((member) => {
        return filter[member.role] === false ? null : member;
      }),
    );
  }, [state, filter]);

  const addMember = (member: Member) => {
    dispatch({ type: "ADD", payload: { member } });
  };

  const editMember = (member: Member) => {
    dispatch({ type: "EDIT", payload: { member } });
  };

  const deleteMember = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const sortMembers = (
    sortBy: keyof Member,
    order: "ascending" | "descending",
  ) => {
    dispatch({ type: "SORT", payload: { sortBy, order } });
  };

  const filterMembers = (filterParam: { [key: string]: boolean }) => {
    setFilter(filterParam);
  };

  return {
    members,
    addMember,
    editMember,
    deleteMember,
    sortMembers,
    filterMembers,
  };
}
