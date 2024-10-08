export default function CompleteButton({ item }: { item: string[] }) {
  const handleComplete = () => {
    console.log("Complete");
    console.log(item);
  };

  return (
    <div>
      <button
        className="rounded-full bg-blue-500 px-8 py-4 font-bold text-white"
        onClick={handleComplete}
      >
        完成
      </button>
    </div>
  );
}
