import {
  SearchWindow,
  FilterButton,
  SortButton,
  AddButton,
} from "@/components/utility/_index";
import Body from "../body/body";
import Footer from "../footer/footer";
import { Header } from "../header/header";
import { Member } from "@/store/types/member";

interface MemberTableProps {
  members: Member[];
}

const MemberTable: React.FC<MemberTableProps> = ({ members }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-gray-800">
      <div className="flex flex-col p-2">
        <div className="flex h-10 w-full items-center justify-between gap-2">
          <h2 className="flex-1 text-lg">Members</h2>
          <AddButton onClick={() => {}} />
        </div>
        <div className="flex h-10 w-full items-center justify-between gap-2">
          <div className="flex-1">
            <SearchWindow setSearch={() => {}} />
          </div>

          <FilterButton
            setFilter={() => {}}
            options={[
              { id: "admin", label: "admin" },
              { id: "member", label: "member" },
              { id: "viewer", label: "viewer" },
            ]}
          />

          <div className="w-10">
            <SortButton onClick={() => {}} />
          </div>
        </div>
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
        <Body members={members} />
        <Footer count={members.length} />
      </table>
    </div>
  );
};

export default MemberTable;
