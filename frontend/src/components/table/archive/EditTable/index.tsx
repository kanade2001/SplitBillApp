import { FormProps } from "@/store/types/form";
import Header from "./_components/header";
import Footer from "./_components/footer";

interface TableProps {
  formProps: FormProps[];
}

const EditTable: React.FC<TableProps> = ({ formProps }: TableProps) => {
  return (
    <table className="w-full table-fixed border border-gray-400">
      <Header formProps={formProps} />
      <Footer formProps={formProps} />
    </table>
  );
};

export default EditTable;
