"use client";

import { useReducer } from "react";

import { Info } from "@/components/Alert/Alert";
import HeaderRow from "./_components/header-row";
import BodyRow from "./_components/body-row";
import AddRow from "./_components/add-row";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

      <table className="w-full table-fixed border border-gray-400">
        <HeaderRow />

        <tbody>
          {state.map((item) => (
            <BodyRow key={item.id} item={item} dispatch={dispatch} />
          ))}
        </tbody>
        <tfoot className="bg-gray-800 text-white">
          <AddRow dispatch={dispatch} />
        </tfoot>
      </table>
      {state.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}
