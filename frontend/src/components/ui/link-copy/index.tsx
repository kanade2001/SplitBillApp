import { useState } from "react";

import classNames from "classnames";

interface LinkCopyProps {
  link: string;
}

const LinkCopyField: React.FC<LinkCopyProps> = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <div className="flex w-full">
      <div className="grow rounded-s-lg border-gray-500 bg-gray-600 p-2 text-gray-200">
        {link}
      </div>
      <div>
        <button
          className={classNames("w-20 rounded-e-lg p-2", {
            "bg-green-600": isCopied,
            "bg-blue-600": !isCopied,
          })}
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default LinkCopyField;
