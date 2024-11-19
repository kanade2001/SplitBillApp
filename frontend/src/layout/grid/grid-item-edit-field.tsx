import { ReactNode } from "react";

interface GridItemEditFieldProps {
  children: ReactNode;
}

const GridItemEditField: React.FC<GridItemEditFieldProps> = ({ children }) => {
  return (
    <div className="grid w-full grid-cols-[auto_1fr] items-center gap-2">
      {children}
    </div>
  );
};

export default GridItemEditField;
