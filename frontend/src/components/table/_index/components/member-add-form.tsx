import { DropdownSelect, TextInput } from "@/components/input";
import { MemberRole } from "@/assets/status/_index";
import { useMember } from "@/store/hooks/useMember";
import { LinkCopyField } from "@/components/ui";
import { FlexColumn } from "@/components/view/flex/flex-column";

interface MemberAddFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const MemberForm: React.FC<MemberAddFormProps> = ({ onConfirm, onCancel }) => {
  const { member, setMemberField } = useMember();

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-2">
        <div className="w-1/6 min-w-32">
          <DropdownSelect
            value={member.role}
            onChange={(role: string) => setMemberField("role", role)}
            options={[
              { id: "admin", item: MemberRole({ role: "admin" }) },
              { id: "member", item: MemberRole({ role: "member" }) },
              { id: "viewer", item: MemberRole({ role: "viewer" }) },
            ]}
          />
        </div>
        <div className="grow">
          <TextInput
            value={member.name}
            onChange={(e) => setMemberField("name", e.target.value)}
            placeholder="Name"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="w-20 rounded-lg bg-gray-600 text-white"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="w-20 rounded-lg bg-blue-600 text-white"
          onClick={onConfirm}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export const MemberAddForm = () => {
  return (
    <FlexColumn>
      <h3 className="text-xl">メンバーを追加</h3>
      <p>リンクを共有</p>
      <LinkCopyField link="https://example.com" />
      <p>フォームから追加</p>
      <MemberForm onConfirm={() => {}} onCancel={() => {}} />
    </FlexColumn>
  );
};
