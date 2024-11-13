import { FlexBox } from "@/components/ui";
import { DropdownSelect, TextInput } from "@/components/input";
import { MemberRole } from "@/assets/status/_index";
import { useMember } from "@/store/hooks/useMember";

interface MemberAddFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const MemberAddForm: React.FC<MemberAddFormProps> = ({
  onConfirm,
  onCancel,
}) => {
  const { member, setMemberField } = useMember();

  return (
    <div className="flex w-full flex-col gap-2">
      <h3>メンバーを追加</h3>
      <FlexBox cols="2">
        <DropdownSelect
          value={member.role}
          onChange={(role: string) => setMemberField("role", role)}
          options={[
            { id: "", item: "---Select Role---" },
            { id: "admin", item: MemberRole({ role: "admin" }) },
            { id: "member", item: MemberRole({ role: "member" }) },
            { id: "viewer", item: MemberRole({ role: "viewer" }) },
          ]}
        />
        <TextInput
          value={member.name}
          onChange={(e) => setMemberField("name", e.target.value)}
        />
      </FlexBox>
      <div className="flex justify-end gap-2">
        <button className="w-20 rounded-lg bg-gray-500 px-2" onClick={onCancel}>
          Cancel
        </button>
        <button className="w-20 rounded-lg bg-red-500 px-2" onClick={onConfirm}>
          Add
        </button>
      </div>
    </div>
  );
};

export default MemberAddForm;
