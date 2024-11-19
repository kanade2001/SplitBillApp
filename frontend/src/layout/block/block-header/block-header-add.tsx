interface BlockHeaderAddProps {
  title: string;
  handleAdd: () => void;
}

const BlockHeaderAdd: React.FC<BlockHeaderAddProps> = ({
  title,
  handleAdd,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <button onClick={handleAdd} className="">
        Add
      </button>
    </div>
  );
};

export default BlockHeaderAdd;
