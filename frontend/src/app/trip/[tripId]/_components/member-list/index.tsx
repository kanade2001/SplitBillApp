import EditableTable from "@/components/table/table";
import { TextInput } from "@/components/ui";
import { useTextForm } from "@/hooks/textform";

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
    let error = false;
    Object.keys(Data).forEach((key) => {
      error = Data[key as keyof DataType].handleCheck() || error;
    });

    if (error) {
      console.log(error, Data.name.error, Data.email.error, Data.role.error);
    }
  };

  const handleReset = () => {
    console.log("Reset");
    Object.keys(Data).forEach((key) => {
      Data[key as keyof DataType].handleReset();
    });
  };

  return (
    <div>
      <p>MemberList {id} works!</p>

      <EditableTable
        items={[
          {
            id: "name",
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
            id: "email",
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
            id: "role",
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
