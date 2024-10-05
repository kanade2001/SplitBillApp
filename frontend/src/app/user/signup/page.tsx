"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      {
        /* TODO 画面上にエラーメッセージを表示する */
      }
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("email", email);
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
          <input
            type="checkbox"
            id="terms"
            className="rounded forcus:ring-blue-500 focus:ring-2"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="terms" className="ml-2">
            I agee to the &nbsp;
            {/* TODO 利用規約へのリンクの確認 */}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>
        <div className="my-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white rounded w-full font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            {/* TODO 連続で押された場合、処理が重複して行われないようにする */}
            Sign up
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
