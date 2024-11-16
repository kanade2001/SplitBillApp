"use client";

import { TextInput } from "@/components/input";
import { FlexColumn } from "@/components/view";
import SidePadding from "@/components/view/template/side-padding";
import { useLoginForm } from "@/app/user/login/loginTypes";

export default function Login() {
  const { loginData, setEmail, setPassword } = useLoginForm();

  return (
    <SidePadding>
      <FlexColumn className="items-center">
        <h1 className="text-2xl">Login</h1>
        <TextInput
          type="email"
          id="email"
          value={loginData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
        />
        <TextInput
          type="password"
          id="password"
          value={loginData.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Password"
        />
        <button className="w-full rounded-md bg-blue-500 p-2 text-white">
          Login
        </button>
        <p>
          Don&apos;t have an account? &nbsp;
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </FlexColumn>
    </SidePadding>
  );
}
