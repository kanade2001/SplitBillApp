import classNames from "classnames";

interface FlexColumnProps {
  children: React.ReactNode;
  className?: string;
}

export const FlexColumn: React.FC<FlexColumnProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("flex w-full flex-col gap-2", className)}>
      {children}
    </div>
  );
};
