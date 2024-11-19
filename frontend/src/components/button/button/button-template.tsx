interface ButtonTemplateProps {
  onClick: () => void;
  className: string;
  label: string;
}

export const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  onClick,
  className,
  label,
}) => {
  return (
    <button
      className={[
        className,
        "flex h-6 w-16 items-center justify-center gap-2 rounded-md px-2",
      ].join(" ")}
      onClick={onClick}
    >
      <p className="text-sm text-white">{label}</p>
    </button>
  );
};
