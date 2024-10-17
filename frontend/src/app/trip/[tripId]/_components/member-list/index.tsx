import EditableTable from "@/components/table/table";
import TableHeader from "@/components/table/table-header";
import TableAddFooter from "@/components/table/table-add-footer";

interface MemberListProps {
  id: string;
}

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  return (
    <div>
      <p>MemberList {id} works!</p>
      <table className="w-full table-fixed border border-gray-400">
        <TableHeader
          key="member-table"
          items={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "action", label: "Action" },
          ]}
        />
        <TableAddFooter key="member-table-footer" col={4} />
      </table>

      <EditableTable
        key="member-table"
        items={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
          { key: "action", label: "Action" },
        ]}
      />
    </div>
  );
};

export default MemberList;
