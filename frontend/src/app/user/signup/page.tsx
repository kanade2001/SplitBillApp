"use client";

import { useState } from "react";

import { TextInput } from "@/components/input";
import { FlexColumn } from "@/components/view";
import SidePadding from "@/components/view/template/side-padding";

export default function PreSignup() {
  const [email, setEmail] = useState<string>("");

  return (
    <SidePadding>
      <FlexColumn className="items-center">
        <h1 className="text-2xl">Sign up</h1>
        <TextInput
          type="email"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
        />

        <button className="w-full rounded-md bg-blue-500 p-2 text-white">
          Send Email
        </button>
        <p>
          Already have an account? &nbsp;
          <a href="/user/login" className="text-blue-500">
            Log in
          </a>
        </p>
      </FlexColumn>
    </SidePadding>
  );
}
