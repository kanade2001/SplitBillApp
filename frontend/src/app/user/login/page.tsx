"use client";

import { useLoginForm } from "@/app/user/login/loginTypes";
import { TextInput } from "@/components/input";
import { FlexColumn } from "@/components/view";
import SidePadding from "@/components/view/template/side-padding";

export default function Login() {
  const { loginData, setEmail, setPassword } = useLoginForm();

  return (
    <SidePadding>
      <FlexColumn className="items-center">
        <h1 className="text-2xl">Login</h1>
        <TextInput
          type="email"
          value={loginData.email}
          onChange={(email: string) => setEmail(email)}
          placeholder="Email"
        />
        <TextInput
          type="password"
          value={loginData.password}
          onChange={(password: string) => setPassword(password)}
          placeholder="Password"
        />
        <button className="w-full rounded-md bg-blue-500 p-2 text-white">
          Login
        </button>
        <p>
          Don&apos;t have an account? &nbsp;
          <a href="/user/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </FlexColumn>
    </SidePadding>
  );
}
