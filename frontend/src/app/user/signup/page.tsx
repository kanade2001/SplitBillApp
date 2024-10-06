"use client";

import Link from "next/link";
import { useReducer, FormEvent } from "react";
import InputField from "@/components/InputField";
import CheckboxField from "@/components/Field/CheckboxField";

interface FormState {
  email: string;
  agreed: boolean;
  emailError: string;
  termsError: string;
}

type FormAction =
  | { type: "FORM_UPDATE"; field: keyof FormState; value: string | boolean }
  | {
      type: "CHECK_ERROR";
      errors: { emailError: boolean; agreedError: boolean };
    };

const initialState: FormState = {
  email: "",
  agreed: false,
  emailError: "",
  termsError: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    // フォームの更新
    case "FORM_UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };
    // バリデーションチェック
    case "CHECK_ERROR":
      return {
        ...state,
        emailError: action.errors.emailError
          ? "Please enter a valid email address."
          : "",
        termsError: action.errors.agreedError
          ? "Please agree to the terms and conditions."
          : "",
      };
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const errors = {
      emailError: false,
      agreedError: false,
    };

    // Emailのチェック
    if (!state.email) {
      errors.emailError = true;
      hasError = true;
    } else {
      errors.emailError = false;
    }

    // 利用規約のチェック
    if (!state.agreed) {
      errors.agreedError = true;
      hasError = true;
    } else {
      errors.agreedError = false;
    }

    dispatch({ type: "CHECK_ERROR", errors });
    if (hasError) {
      return;
    }

    // TODO ログイン処理

    console.log("email", state.email);
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-4">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "FORM_UPDATE",
              field: "email",
              value: e.target.value,
            })
          }
          error={state.emailError}
        />

        <CheckboxField
          id="terms"
          checked={state.agreed}
          onChange={(e) =>
            dispatch({
              type: "FORM_UPDATE",
              field: "agreed",
              value: e.target.checked,
            })
          }
          error={state.termsError}
        />

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
