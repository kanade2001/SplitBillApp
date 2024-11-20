import classNames from "classnames";

interface SidePaddingProps {
  children: React.ReactNode;
  className?: string;
}

const SidePadding: React.FC<SidePaddingProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "mx-auto flex max-w-80 items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SidePadding;
