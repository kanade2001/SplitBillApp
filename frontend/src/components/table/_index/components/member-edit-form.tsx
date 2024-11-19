import { MemberRole } from "@/assets/status/_index";
import { DropdownSelect, TextInput } from "@/components/input";
import { SubmitCancel } from "@/components/template";
import { FlexColumn } from "@/components/view";
import { useMember } from "@/store/hooks/useMember";
import { Member } from "@/store/types/member";

interface MemberEditFormProps {
  currentMemberState: Member;
  handleCancel: () => void;
  handleEdit: (member: Member) => void;
  handleDelete: (id: string) => void;
}

export const MemberEditForm: React.FC<MemberEditFormProps> = ({
  currentMemberState,
  handleCancel, // ポップアップ画面を閉じる
  handleEdit,
  handleDelete,
}) => {
  const { member, setMemberField } = useMember(currentMemberState);

  return (
    <FlexColumn>
      <h2 className="text-xl">メンバーを編集</h2>

      <SubmitCancel
        label="メンバーを編集"
        handleSubmit={() => handleEdit(member)}
        handleDelete={() => handleDelete(member.id)}
        handleCancel={handleCancel}
        submitLabel="更新"
      >
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
              onChange={(name: string) => setMemberField("name", name)}
              placeholder="Name"
            />
          </div>
        </div>
      </SubmitCancel>
    </FlexColumn>
  );
};
