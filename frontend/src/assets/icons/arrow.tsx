import React from "react";

import { IconProps } from "@/store/types/icon";

export const ArrowUp: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className || "h-[24px] w-[24px] text-gray-800 dark:text-white"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
      />
    </svg>
  );
};

export const ArrowDown: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className || "h-[24px] w-[24px] text-gray-800 dark:text-white"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19V5m0 14-4-4m4 4 4-4"
      />
    </svg>
  );
};
