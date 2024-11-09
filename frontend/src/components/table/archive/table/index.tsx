import TableHeader from "../table-header";
import TableAddFooter from "../table-add-footer";

interface TableProps {
  items: { id: string; label: string; form: JSX.Element }[];
  actions: {
    AddItem?: () => void;
    EditItem?: () => void;
    DeleteItem?: () => void;
    ResetItem?: () => void;
  };
}

const EditableTable: React.FC<TableProps> = ({ items, actions }) => {
  return (
    <table className="w-full table-fixed border border-gray-400">
      <TableHeader
        items={items.map((item) => {
          return { key: item.id, label: item.label };
        })}
      />
      <TableAddFooter
        items={items.map((item) => {
          return { id: item.id, form: item.form };
        })}
        actions={{
          AddItem: actions.AddItem || (() => {}),
          ResetItem: actions.ResetItem || (() => {}),
        }}
      />
    </table>
  );
};

export default EditableTable;
