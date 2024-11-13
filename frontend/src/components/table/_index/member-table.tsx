import { Member } from "@/store/types/member";
import { Header } from "../header/_index";
import { MemberBody } from "../body/_index";
import { FooterWide } from "../footer/_index";
import { SearchFilterSort, TitleAdd } from "../top/_index";
import usePopupMenu from "@/components/ui/popup-menu/use-popup-menu";
import { MemberAddForm } from "./components";

interface MemberTableProps {
  members: Member[];
}

const MemberTable: React.FC<MemberTableProps> = ({ members }) => {
  const { PopupMenuComponent: AddPopup, open: AddPopupOpen } = usePopupMenu();

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-gray-800">
      <div className="flex flex-col p-2">
        <TitleAdd title="Members" handleAdd={AddPopupOpen} />
        {/* AddPopupOpen is a function that opens the popup menu */}
        <SearchFilterSort
          setSearch={() => {}}
          setFilter={(filterParam: { [key: string]: boolean }) => {
            console.log(filterParam);
          }}
          setSort={(sortParam: {
            id: string | null;
            type: "ascending" | "descending" | null;
          }) => {
            console.log(sortParam);
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
        <MemberBody members={members} />
        <FooterWide
          className="px-2"
          colSpan={4}
          label={members.length + " Members"}
        />
      </table>
      <AddPopup>
        <MemberAddForm />
      </AddPopup>
    </div>
  );
};

export default MemberTable;
