interface FlexColumnProps {
  children: React.ReactNode;
  className?: string;
}

export const FlexColumn: React.FC<FlexColumnProps> = ({
  children,
  className,
}) => {
  return (
    <div className={["flex flex-col gap-2", className].join(" ")}>
      {children}
    </div>
  );
};
