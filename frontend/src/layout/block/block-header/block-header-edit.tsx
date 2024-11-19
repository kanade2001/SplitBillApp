interface BlockHeaderEditProps {
  title: string;
  handleEdit: () => void;
  handleSave: () => boolean;
}

const BlockHeaderEdit: React.FC<BlockHeaderEditProps> = ({
  title,
  handleEdit,
  handleSave,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <button onClick={handleEdit} className="">
        Edit
      </button>
      <button onClick={handleSave} className="">
        Save
      </button>
    </div>
  );
};

export default BlockHeaderEdit;
