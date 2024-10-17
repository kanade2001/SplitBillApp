import EditableTable from "@/components/table/table";
import TableHeader from "@/components/table/table-header";
import TableAddFooter from "@/components/table/table-add-footer";

import { TextInput } from "@/components/ui";

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
          {
            key: "name",
            label: "Name",
            form: (
              <TextInput
                id="name-input"
                error={false}
                value=""
                onChange={() => {}}
                required={true}
              />
            ),
          },
          {
            key: "email",
            label: "Email",
            form: (
              <TextInput
                id="email-input"
                error={false}
                value=""
                onChange={() => {}}
                required={true}
              />
            ),
          },
          {
            key: "role",
            label: "Role",
            form: (
              <TextInput
                id="role-input"
                error={false}
                value=""
                onChange={() => {}}
                required={true}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default MemberList;
