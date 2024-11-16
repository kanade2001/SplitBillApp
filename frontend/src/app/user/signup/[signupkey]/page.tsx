"use client";

import { useEffect } from "react";
import { TextInput } from "@/components/input";
import { FlexColumn } from "@/components/view";
import SidePadding from "@/components/view/template/side-padding";
import { useSignupForm } from "../signupTypes";

interface SignupParams {
  params: { signupkey: string };
}

export default function Signup({ params }: SignupParams) {
  const { signupData, setFirstName, setLastName, setUsername, setPassword } =
    useSignupForm();
  const signupKey = params.signupkey;

  useEffect(() => {
    if (signupKey) {
      // check if key is valid
    }
  }, [signupKey]);

  if (!signupKey) {
    // Signupkey is not valid
    return <>Forbidden</>;
  }

  const handleSubmit = async () => {
    // send signup data to server
    console.log(signupKey, signupData);
  };

  return (
    <>
      <h2>KEY = {signupKey}</h2>
      <SidePadding>
        <FlexColumn className="items-center">
          <h1 className="text-2xl">Sign up</h1>
          <TextInput
            type="text"
            id="firstname"
            value={signupData.name.firstname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            placeholder="First name"
          />
          <TextInput
            type="text"
            id="lastname"
            value={signupData.name.lastname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            placeholder="Last name"
          />
          <TextInput
            type="text"
            id="username"
            value={signupData.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder="User name"
          />

          <TextInput
            type="password"
            id="password"
            value={signupData.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
          />

          <button
            className="w-full rounded-md bg-blue-500 p-2 text-white"
            onClick={handleSubmit}
          >
            Sign up
          </button>
          <p>
            Already have an account? &nbsp;
            <a href="/user/login" className="text-blue-500">
              Log in
            </a>
          </p>
        </FlexColumn>
      </SidePadding>
    </>
  );
}
