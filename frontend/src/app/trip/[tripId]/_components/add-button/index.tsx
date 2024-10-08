export default function AddButton({
  onClick,
  item,
}: {
  onClick: (item: string) => void;
  item: string;
}) {
  return (
    <div>
      <button
        className="rounded-full bg-blue-500 px-8 py-4 font-bold text-white"
        onClick={() => onClick(item)}
      >
        追加
      </button>
    </div>
  );
}
