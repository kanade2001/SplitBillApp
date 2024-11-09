import { Member } from "@/store/types/member";
import { DotsHorizonIcon } from "@/assets/icons/_index";
import { MemberRole } from "@/assets/status/_index";
import React from "react";

interface BodyProps {
  members: Member[];
}

const Body: React.FC<BodyProps> = ({ members }) => {
  return (
    <tbody className="">
      {members.map((member: Member) => (
        <tr key={member.id} className="h-10 border-y border-gray-500">
          <td className="px-2">{member.name}</td>
          <td className="px-2">
            <MemberRole role={member.role} />
          </td>
          <td className="px-2">{member.email}</td>
          <td className="px-2">
            <button className="flex items-center">
              <DotsHorizonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
