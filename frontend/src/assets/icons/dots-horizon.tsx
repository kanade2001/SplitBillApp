import { IconProps } from "@/store/types/icon";

const DotsHorizon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className || "h-6 w-6 text-gray-800 dark:text-white"}
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
        strokeWidth="2"
        d="M6 12h.01m6 0h.01m5.99 0h.01"
      />
    </svg>
  );
};

export default DotsHorizon;
