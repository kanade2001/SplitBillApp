import { useState } from "react";

const useResettableKey = () => {
  const [key, setKey] = useState<number>(0);

  const resetKey = () => {
    setKey((prevkey) => prevkey + 1);
  };

  return [key, resetKey] as const;
};

export default useResettableKey;
