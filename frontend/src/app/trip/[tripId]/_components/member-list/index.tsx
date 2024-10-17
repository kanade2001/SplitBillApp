import { useState } from "react";
import TableHeader from "@/components/table/table-header";

interface MemberListProps {
  id: string;
}

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  return (
    <div>
      <p>MemberList {id} works!</p>
      <table className="w-full table-fixed border border-gray-400">
        <TableHeader
          key="member-table"
          items={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "action", label: "Action" },
          ]}
        />
      </table>
    </div>
  );
};

export default MemberList;
