import DotsHorizon from "@/assets/icons/dots-horizon";
import { Member } from "@/store/types/member";
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
            <button className="flex items-center">{DotsHorizon()}</button>
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
      <p className="flex-1">Admin</p>
    </div>
  );
};

const RolesIcon = (role: string) => {
  switch (role) {
    case "admin":
      return <AdminIcon />;
    case "member":
      return <MemberIcon />;
    case "viewer":
      return <ViewerIcon />;
    default:
      return <></>;
  }
};

const Roles: React.FC<{ role: string }> = ({ role }) => {
  switch (role) {
    case "admin":
      return (
        <div className="flex items-center rounded-lg bg-red-900">
          <div className="px-2">
            <AdminIcon />
          </div>
          <p className="flex-1">Admin</p>
        </div>
      );
    case "member":
      return (
        <div className="flex items-center rounded-lg bg-blue-900">
          <div className="px-2">
            <MemberIcon />
          </div>
          <p className="flex-1">Member</p>
        </div>
      );
    case "viewer":
      return (
        <div className="flex items-center rounded-lg bg-gray-800">
          <div className="px-2">
            <ViewerIcon />
          </div>
          <p className="flex-1">Viewer</p>
        </div>
      );
    default:
      return <></>;
  }
};

const AdminIcon = () => {
  return (
    <svg
      className="h-4 w-4 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const MemberIcon = () => {
  return (
    <svg
      className="h-4 w-4 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const ViewerIcon = () => {
  return (
    <svg
      className="h-4 w-4 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const PendingIcon = () => {
  return (
    <svg
      className="h-6 w-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default Body;
