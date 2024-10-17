import { useState } from "react";

interface MemberListProps {
  id: string;
}

const MemberList: React.FC<MemberListProps> = ({ id }) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const handleAdd = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div>
      <p>MemberList works!</p>
      <table className="w-full table-fixed border border-gray-400">
        <thead>
          <tr>Member</tr>
        </thead>
      </table>
    </div>
  );
};

export default MemberList;
