import classNames from "classnames";

import { BadgeCheckIcon, ClockIcon, EyeIcon, UserIcon } from "@/assets/icons";

const MemberRole: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div
      className={classNames(
        "flex items-center rounded-lg",
        role === "admin" && "bg-red-900",
        role === "member" && "bg-blue-900",
        role === "viewer" && "bg-gray-600",
        role === "pending" && "bg-gray-800",
      )}
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

export default MemberRole;
