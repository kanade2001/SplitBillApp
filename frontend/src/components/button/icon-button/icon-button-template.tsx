import classNames from "classnames";

import { IconProps } from "@/store/types/icon";
interface IconButtonProps {
  onClick: () => void;
  className: string;
  icon: React.FC<IconProps>;
  label: string;
}

export const IconButtonTemplate: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon: Icon,
  label,
}) => {
  return (
    <button
      className={classNames(
        className,
        "flex h-6 w-20 items-center justify-center gap-2 rounded-md px-2",
      )}
      onClick={onClick}
    >
      <Icon className="h-4 w-4 text-white" />
      <p className="text-sm text-white">{label}</p>
    </button>
  );
};
