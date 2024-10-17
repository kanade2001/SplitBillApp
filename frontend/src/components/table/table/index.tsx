import TableHeader from "../table-header";
import TableAddFooter from "../table-add-footer";

interface TableProps {
  key: string;
  items: { key: string; label: string }[];
}

const EditableTable: React.FC<TableProps> = ({ key, items }) => {
  return (
    <table key={key} className="w-full table-fixed border border-gray-400">
      <TableHeader
        key="member-table"
        items={items.map((item) => {
          return { key: item.key, label: item.label };
        })}
      />
      <TableAddFooter key="member-table-footer" col={items.length} />
    </table>
  );
};

export default EditableTable;
