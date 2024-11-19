"use client";

import { useState } from "react";

import GeneralSettings from "./_components/general-settings";

import { TextEditInput, DateEditInput } from "@/components/input";
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

      <GeneralSettings />

      <BlockTemplate label="General">
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-2">
          <p>Title</p>
          <TextEditInput value={title} onChange={setTitle} />
          <p>Start Date</p>
          <DateEditInput
            value="2024-11-11"
            handleSave={(value: string) => {
              console.log(value);
            }}
          />
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
