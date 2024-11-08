import { FormProps } from "@/store/types/form";

interface EditProps {
  formProps: FormProps[];
  handleDelete?: () => void;
  handleEdit?: () => void;
  handleAdd?: () => void;
}

const Edit = ({
  formProps,
  handleDelete,
  handleEdit,
  handleAdd,
}: EditProps) => {
  return (
    <>
      <tr className="bg-gray-400">
        <th></th>
        <th></th>
      </tr>
      <tr className="bg-gray-400">
        <th></th>
        <th colSpan={formProps.length}>
          <div className="flex justify-end p-2">
            {handleDelete && (
              <button
                className="x-20 ms-2 rounded-md bg-red-800 px-2 text-center text-sm text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
            <button
              className="x-20 ms-2 rounded-md bg-gray-800 px-2 text-center text-sm text-white"
              onClick={() => {}}
            >
              Reset
            </button>
            {handleEdit && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            {handleAdd && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={handleAdd}
              >
                Add
              </button>
            )}
          </div>
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default Edit;
