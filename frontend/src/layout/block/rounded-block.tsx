import { ReactNode } from "react";

interface roundedBlockProps {
  children: ReactNode;
}

const RoundedBlock: React.FC<roundedBlockProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md bg-gray-800">
      {children}
    </div>
  );
};

export default RoundedBlock;
