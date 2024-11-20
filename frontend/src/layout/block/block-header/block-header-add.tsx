import { AddButton } from "@/components/button/_index";

interface BlockHeaderAddProps {
  title: string;
  handleAdd: () => void;
}

const BlockHeaderAdd: React.FC<BlockHeaderAddProps> = ({
  title,
  handleAdd,
}) => {
  return (
    <div className="flex w-full items-center justify-between p-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <AddButton onClick={handleAdd} />
    </div>
  );
};

export default BlockHeaderAdd;
