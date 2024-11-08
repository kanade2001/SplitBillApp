import { useState } from "react";
import { FormProps } from "@/store/types/form";
import Edit from "./edit";

interface FooterProps {
  formProps: FormProps[];
}

const Footer: React.FC<FooterProps> = ({ formProps }) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  return (
    <tfoot>
      <tr className="border border-r-0 border-gray-400 bg-gray-800">
        <th>
          <PlusIcon />
        </th>
        <th
          colSpan={formProps.length + 1}
          className="border border-l-0 border-gray-400 bg-gray-800 text-white"
        >
          <button
            className="h-full w-full p-2 text-left"
            onClick={() => setIsAdd(!isAdd)}
          >
            {isAdd ? "Cancel" : "Add"}
          </button>
        </th>
      </tr>
      <Edit formProps={formProps} handleAdd={() => {}} />
    </tfoot>
  );
};

const PlusIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-full text-gray-800 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m-7 7V5"
      />
    </svg>
  );
};

export default Footer;
