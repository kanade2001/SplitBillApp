interface BlockHeaderProps {
  title: string;
}

const BlockHeader: React.FC<BlockHeaderProps> = ({ title }) => {
  return <h3 className="text-xl font-bold text-white">{title}</h3>;
};

export default BlockHeader;
