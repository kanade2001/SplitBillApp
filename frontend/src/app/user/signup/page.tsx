"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [agreedError, setAgreedError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (email === "" || email === "email") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!agreed) {
      setAgreedError(true);
      hasError = true;
    } else {
      setAgreedError(false);
    }

    if (hasError) {
      return;
    }

    // TODO ログイン処理

    console.log("email", email);
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-4">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div
          className={`my-2 ${
            emailError ? "border rounded border-red-500" : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError ? (
            <p className="text-red-500 text-xs italic">
              Please enter a valid email address.
            </p>
          ) : null}
        </div>

        <div
          className={`my-2 ${
            agreedError ? "border rounded border-red-500" : ""
          }`}
        >
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
          {agreedError ? (
            <p className="text-red-500 text-xs italic">
              Please agree to the terms and conditions.
            </p>
          ) : null}
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
          <p>Have an account already? &nbsp;</p>
          <Link href="/user/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
