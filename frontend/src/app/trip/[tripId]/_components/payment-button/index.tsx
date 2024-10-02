export default function PaymentButton({
  onClick,
  item,
}: {
  onClick: (item: string) => void;
  item: string;
}) {
  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full"
        onClick={() => onClick(item)}
      >
        追加
      </button>
    </div>
  );
}
