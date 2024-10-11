"use client";

import { useReducer } from "react";

import { Info } from "@/components/Alert/Alert";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import HeaderRow from "../header-row";
import BodyRow from "../body-row";
import AddRow from "../add-row";

import { initialStateList, ItemReducer } from "../../_types/type";

export default function PaymentList() {
  const [state, dispatch] = useReducer(ItemReducer, initialStateList);

  return (
    <div className="">
      <table className="w-full table-fixed border border-gray-400">
        <thead className="bg-blue-800 text-white">
          <HeaderRow />
        </thead>
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
