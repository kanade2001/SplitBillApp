import { useState } from "react";

import EditableTable from "@/components/table/table";
import { TextInput } from "@/components/ui";
import { useTextForm } from "@/hook/textform";
import { useForm } from "@/hook/form";

interface MemberListProps {
  id: string;
}

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  const [Add, setAdd] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleAdd = () => {
    console.log("Add", Add);
  };
  const handleReset = () => {
    console.log("Reset", Add);
    setAdd({
      name: "",
      email: "",
      role: "",
    });
  };

  const Data = useForm([
    {
      key: "name",
      form: useTextForm(),
    },
    {
      key: "email",
      form: useTextForm(),
    },
    {
      key: "role",
      form: useTextForm(),
    },
  ]);

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
                value={Add.name}
                onChange={(e) => {
                  setAdd({ ...Add, name: e.target.value });
                }}
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
                value={Add.email}
                onChange={(e) => {
                  setAdd({ ...Add, email: e.target.value });
                }}
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
                value={Add.role}
                onChange={(e) => {
                  setAdd({ ...Add, role: e.target.value });
                }}
                required={true}
              />
            ),
          },
        ]}
        actions={{
          AddItem: handleAdd,
          ResetItem: handleReset,
        }}
      />
    </div>
  );
};

export default MemberList;
