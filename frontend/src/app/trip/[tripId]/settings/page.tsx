"use client";

import { useState } from "react";

import { TextEditInput } from "@/components/input";
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
  const [title, setTitle] = useState("");
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
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-2">
          <p>Title</p>
          <TextEditInput value={title} onChange={setTitle} />
          <p>Start Date</p>
          <p>YYYY/MM/DD</p>
          <p>End Date</p>
          <p>YYYY/MM/DD</p>
          <p>Comment</p>
          <TextEditInput value="comment" onChange={() => {}} />
        </div>
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
