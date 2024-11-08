import { IconProps } from "@/store/types/icon";

export const Clock: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className || "h-6 w-6 text-gray-800 dark:text-white"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};