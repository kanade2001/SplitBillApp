import { Body, Footer, Header } from "./_components";
import { Member } from "@/store/types/member";

interface MemberTableProps {
  members: Member[];
}

const MemberTable: React.FC<MemberTableProps> = ({ members }) => {
  return (
    <table className="w-full table-fixed overflow-hidden rounded-lg bg-gray-900">
      <Header />
      <Body members={members} />
      <Footer count={members.length} />
    </table>
  );
};

export default MemberTable;
