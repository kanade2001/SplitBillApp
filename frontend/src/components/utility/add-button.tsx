import { PlusIcon } from "@/assets/icons/_index";

interface AddProps {
  label: string;
}

const AddButton: React.FC<AddProps> = ({ label }) => {
  return (
    <button className="flex h-6 items-center justify-center gap-2 rounded-lg bg-blue-600 px-2">
      <PlusIcon className="h-4 w-4 text-gray-200" />
      <p className="text-sm text-gray-200">{label}</p>
    </button>
  );
};

export default AddButton;
