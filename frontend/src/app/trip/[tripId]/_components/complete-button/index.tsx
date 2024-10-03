export default function CompleteButton({ item }: { item: string[] }) {
  const handleComplete = () => {
    console.log("Complete");
    console.log(item);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full"
        onClick={handleComplete}
      >
        完成
      </button>
    </div>
  );
}
