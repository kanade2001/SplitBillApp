export default function EditButton({
  onClick,
  isEditable,
}: {
  onClick: (isEditable: boolean) => void;
  isEditable: boolean;
}) {
  const handleEdit = () => {
    console.log("Edit");
    console.log({ isEditable });
    onClick(!isEditable);
  };

  return (
    <div>
      <button
        className="rounded-full bg-blue-500 px-8 py-4 font-bold text-white"
        onClick={() => handleEdit()}
      >
        編集
      </button>
    </div>
  );
}
