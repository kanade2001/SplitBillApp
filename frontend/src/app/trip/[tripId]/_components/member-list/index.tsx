import EditableTable from "@/components/table/table";
import { TextInput } from "@/components/ui";
import { useTextForm } from "@/hook/textform";

interface MemberListProps {
  id: string;
}

type DataKeys = "name" | "email" | "role";
type DataType = Record<DataKeys, ReturnType<typeof useTextForm>>;

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  const Data: DataType = {
    name: useTextForm(),
    email: useTextForm(),
    role: useTextForm(),
  };

  const handleAdd = () => {
    const error = (["name", "email", "role"] as DataKeys[]).some((key) =>
      Data[key].handleCheck(),
    );

    if (error) {
      console.log("Error");
    }
  };

  const handleReset = () => {
    console.log("Reset");
    (["name", "email", "role"] as DataKeys[]).forEach((key) => {
      Data[key].handleReset();
    });
  };

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
                error={Data.name.error}
                value={Data.name.value}
                onChange={(e) => {
                  Data.name.handleSet(e);
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
                error={Data.email.error}
                value={Data.email.value}
                onChange={(e) => {
                  Data.email.handleSet(e);
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
                error={Data.role.error}
                value={Data.role.value}
                onChange={(e) => {
                  Data.role.handleSet(e);
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
