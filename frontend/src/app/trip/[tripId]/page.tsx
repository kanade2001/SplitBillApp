"use client";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import MemberTable from "@/components/table/_index/member-table";
import { useMemberList } from "@/store/hooks/useMemberList";
import { testMember1 } from "@/test/members";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined; tab: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  const { members, addMember, editMember, deleteMember } = useMemberList({
    initialMembers: testMember1,
  });

  return (
    <div className="space-y-5 p-5">
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>PUBLIC_KEY = {key}</h2>
      <h2>TAB = {searchParams.tab}</h2>

      <p>NEW TABLE COMPONENT</p>
      <MemberTable
        members={members}
        addMember={addMember}
        editMember={editMember}
        deleteMember={deleteMember}
      />
    </div>
  );
}
