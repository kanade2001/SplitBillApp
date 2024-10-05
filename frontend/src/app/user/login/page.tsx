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
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold my-4">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white rounded w-full font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
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
