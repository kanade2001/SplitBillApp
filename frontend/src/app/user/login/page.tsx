"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="my-4 text-2xl font-bold">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2">
          {" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-8">
          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            {/* TODO 連続で押された場合、処理が重複して行われないようにする */}
            Login
          </button>
        </div>
        <div className="my-8">{/* TODO Google認証でログイン */}</div>
        <div className="my-8 flex">
          <p>Don&apos;t have an account? &nbsp;</p>
          <Link href="/user/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
