import { MemberRole } from "@/assets/status/_index";
import { DropdownSelect, TextInput } from "@/components/input";
import { SubmitCancel } from "@/components/template";
import { LinkCopyField } from "@/components/ui";
import { FlexColumn } from "@/components/view";
import { useMember } from "@/store/hooks/useMember";
import { Member } from "@/store/types/member";

interface MemberAddFormProps {
  handleCancel: () => void;
  handleAdd: (member: Member) => void;
}

export const MemberAddForm: React.FC<MemberAddFormProps> = ({
  handleCancel, // ポップアップ画面を閉じる
  handleAdd,
}) => {
  const { member, setMemberField } = useMember();

  return (
    <FlexColumn>
      <h2 className="text-xl">メンバーを追加</h2>
      <FlexColumn>
        <h3>リンクを共有</h3>
        <LinkCopyField link="https://example.com" />
      </FlexColumn>
      <SubmitCancel
        label="メンバーを追加"
        handleSubmit={() => handleAdd(member)}
        handleCancel={handleCancel}
        submitLabel="追加"
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
