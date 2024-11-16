import { useState } from "react";

interface SignupData {
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  password: string;
}

export function useSignupForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupData: SignupData = {
    name: {
      firstname: firstName,
      lastname: lastName,
    },
    username: username,
    password: password,
  };

  return {
    signupData,
    setFirstName,
    setLastName,
    setUsername,
    setPassword,
  };
}
