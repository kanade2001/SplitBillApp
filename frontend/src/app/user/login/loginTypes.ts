import { useState } from "react";

export interface loginData {
  email: string;
  password: string;
}

export function useLoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginData: loginData = {
    email: email,
    password: password,
  };

  return {
    loginData,
    setEmail,
    setPassword,
  };
}
