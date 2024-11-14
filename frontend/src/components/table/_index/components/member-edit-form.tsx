import { Member } from "@/store/types/member";
import { useMember } from "@/store/hooks/useMember";
import { DropdownSelect, TextInput } from "@/components/input";
import { MemberRole } from "@/assets/status/_index";
import { FlexColumn } from "@/components/view";
import { SubmitCancel } from "@/components/template";

interface MemberEditFormProps {
  currentMemberState: Member;
  handleCancel: () => void;
  handleEdit: (member: Member) => void;
  handleDelete: (id: string) => void;
}

export const MemberEditForm: React.FC<MemberEditFormProps> = ({
  currentMemberState,
  handleCancel, // ポップアップ画面を閉じる
}) => {
  const { member, setMemberField } = useMember(currentMemberState);

  return (
    <FlexColumn>
      <h2 className="text-xl">メンバーを編集</h2>

      <SubmitCancel
        label="メンバーを編集"
        handleSubmit={() => {}}
        handleDelete={() => {}}
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
              onChange={(e) => setMemberField("name", e.target.value)}
              placeholder="Name"
            />
          </div>
        </div>
      </SubmitCancel>
    </FlexColumn>
  );
};
