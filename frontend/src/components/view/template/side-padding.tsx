interface SidePaddingProps {
  children: React.ReactNode;
  className?: string;
}

const SidePadding: React.FC<SidePaddingProps> = ({ children, className }) => {
  return (
    <div
      className={[
        "mx-auto flex max-w-80 items-center justify-center",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default SidePadding;
