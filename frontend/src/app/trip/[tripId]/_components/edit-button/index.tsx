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
        className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full"
        onClick={() => handleEdit()}
      >
        編集
      </button>
    </div>
  );
}
