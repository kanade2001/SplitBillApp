import { AddButton } from "./_components/_index";

interface TitleAddProps {
  title: string;
  handleAdd: () => void;
}

const TitleAdd: React.FC<TitleAddProps> = ({ title, handleAdd }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between gap-2">
      <h2 className="flex-1 text-xl font-bold">{title}</h2>
      <AddButton onClick={handleAdd} />
    </div>
  );
};

export default TitleAdd;
