import EditableTable from "@/components/table/table";

import { TextInput } from "@/components/ui";

interface MemberListProps {
  id: string;
}

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  return (
    <div>
      <p>MemberList {id} works!</p>

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
