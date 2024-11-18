import { ReactNode } from "react";

import { FlexColumn } from "@/components/view";

interface BlockTemplateProps {
  label?: string;
  children: ReactNode;
}

export const BlockTemplate: React.FC<BlockTemplateProps> = ({
  label,
  children,
}) => {
  return (
    <div className="flex w-full rounded-lg bg-gray-800 p-2">
      <FlexColumn>
        {label && <h3 className="text-xl font-bold">{label}</h3>}
        {children}
      </FlexColumn>
    </div>
  );
};

export default BlockTemplate;
