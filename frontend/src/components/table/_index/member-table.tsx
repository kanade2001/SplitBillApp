import React from "react";
import { initialMember, Member } from "@/store/types/member";
import { Header } from "../header/_index";
import { MemberBody } from "../body/_index";
import { FooterWide } from "../footer/_index";
import { SearchFilterSort, TitleAdd } from "../top/_index";
import usePopupMenu from "@/components/ui/popup-menu/use-popup-menu";
import { MemberAddForm, MemberEditForm } from "./components";

interface MemberTableProps {
  members: Member[];
  addMember: (member: Member) => void;
  editMember: (member: Member) => void;
  deleteMember: (id: string) => void;
  sortMembers: (
    sortBy: keyof Member,
    order: "ascending" | "descending",
  ) => void;
  filterMembers: (filterParam: { [key: string]: boolean }) => void;
}

const MemberTable: React.FC<MemberTableProps> = ({
  members,
  addMember,
  editMember,
  deleteMember,
  sortMembers,
  filterMembers,
}) => {
  const {
    PopupMenuComponent: MemberAddPopup,
    open: MemberAddPopupOpen,
    close: MemberAddPopupClose,
  } = usePopupMenu();
  const {
    PopupMenuComponent: MemberEditPopup,
    open: MemberEditPopupOpen,
    close: MemberEditPopupClose,
  } = usePopupMenu();
  const [selectedMember, setSelectedMember] =
    React.useState<Member>(initialMember);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-gray-800">
      <div className="flex flex-col p-2">
        <TitleAdd title="Member" handleAdd={MemberAddPopupOpen} />
        <SearchFilterSort
          setSearch={() => {}}
          setFilter={(filterParam: { [key: string]: boolean }) => {
            filterMembers(filterParam);
          }}
          setSort={(sortParam: {
            id: string | null;
            type: "ascending" | "descending" | null;
          }) => {
            sortMembers(
              sortParam.id as keyof Member,
              sortParam.type as "ascending" | "descending",
            );
          }}
          filterOptions={[
            { id: "admin", label: "admin" },
            { id: "member", label: "member" },
            { id: "viewer", label: "viewer" },
          ]}
          sortOptions={[
            { id: "name", label: "Name" },
            { id: "role", label: "Role" },
            { id: "mail", label: "Mail" },
          ]}
        />
      </div>
      <table className="w-full table-fixed">
        <Header
          cols={[
            { id: "user", label: "User", className: "" },
            { id: "role", label: "Role", className: "w-32" },
            { id: "mail", label: "Mail", className: "" },
            { id: "action", label: "", className: "w-10" },
          ]}
        />
        <MemberBody
          members={members}
          handleEdit={(member: Member) => {
            setSelectedMember(member);
            MemberEditPopupOpen();
          }}
        />
        <FooterWide
          className="px-2"
          colSpan={4}
          label={members.length + " Members"}
        />
      </table>

      <MemberAddPopup>
        <MemberAddForm
          handleCancel={MemberAddPopupClose}
          handleAdd={addMember}
        />
      </MemberAddPopup>

      <MemberEditPopup>
        <MemberEditForm
          currentMemberState={selectedMember}
          handleCancel={MemberEditPopupClose}
          handleEdit={editMember}
          handleDelete={deleteMember}
        />
      </MemberEditPopup>
    </div>
  );
};

export default MemberTable;
