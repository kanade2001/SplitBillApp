"use client";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import MemberTable from "@/components/table/_index/member-table";
import { BlockTemplate } from "@/components/template";
import { useMemberList } from "@/store/hooks/useMemberList";
import { testMember1 } from "@/test/members";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined; tab: string | undefined }; // Public Key in params
};

export default function TripSettingsPage({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  const {
    members,
    addMember,
    editMember,
    deleteMember,
    sortMembers,
    filterMembers,
  } = useMemberList({
    initialMembers: testMember1,
  });

  return (
    <div className="space-y-5 p-5">
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>PUBLIC_KEY = {key}</h2>
      <h2>TAB = {searchParams.tab}</h2>

      <BlockTemplate label="General">
        <p>Template</p>
      </BlockTemplate>

      <MemberTable
        members={members}
        addMember={addMember}
        editMember={editMember}
        deleteMember={deleteMember}
        sortMembers={sortMembers}
        filterMembers={filterMembers}
      />
    </div>
  );
}
