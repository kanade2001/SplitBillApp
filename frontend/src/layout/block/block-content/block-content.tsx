import { ReactNode } from "react";

interface BlockContentProps {
  children: ReactNode;
}

const BlockContent: React.FC<BlockContentProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center p-2">{children}</div>
  );
};

export default BlockContent;
