"use client";

import { useReducer } from "react";

import { Info } from "@/components/Alert/Alert";
import Table from "@/components/ui/table";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import PaymentList from "./_components/payment-list";
import { initialStateList, ItemReducer } from "./_types/type";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  const [state, dispatch] = useReducer(ItemReducer, initialStateList);

  return (
    <div className="space-y-5 p-5">
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>PUBLIC_KEY = {key}</h2>
      <PaymentList />
      <Table state={state} dispatch={dispatch} />
      {state.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}
