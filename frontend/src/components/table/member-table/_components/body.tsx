import DotsHorizon from "@/assets/icons/dots-horizon";
import { Member } from "@/store/types/member";
import {
  DotsHorizonIcon,
  BadgeCheckIcon,
  UserIcon,
  EyeIcon,
  ClockIcon,
} from "@/assets/icons/_index";
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
            <RoleBadge role={member.role} />
          </td>
          <td className="px-2">{member.email}</td>
          <td className="px-2">
            <button className="flex items-center">
              <DotsHorizon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const RoleBadge: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div
      className={[
        "flex items-center rounded-lg",
        role === "admin" && "bg-red-900",
        role === "member" && "bg-blue-900",
        role === "viewer" && "bg-gray-800",
        role === "pending" && "bg-gray-800",
      ].join(" ")}
    >
      <div className="px-2">{RolesIcon(role)}</div>
      <p className="flex-1">{role}</p>
    </div>
  );
};

const RolesIcon = (role: string) => {
  switch (role) {
    case "admin":
      return <BadgeCheckIcon className="h-4 w-4 text-white" />;
    case "member":
      return <UserIcon className="h-4 w-4 text-white" />;
    case "viewer":
      return <EyeIcon className="h-4 w-4 text-white" />;
    case "pending":
      return <ClockIcon className="h-4 w-4 text-white" />;
    default:
      return <></>;
  }
};

export default Body;
