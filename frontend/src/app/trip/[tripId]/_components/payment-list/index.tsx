"use client";

import { useReducer } from "react";

import { Info } from "@/components/Alert/Alert";
import Table from "@/components/ui/table";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { initialStateList, ItemReducer } from "../../_types/type";

export default function PaymentList() {
  const [state, dispatch] = useReducer(ItemReducer, initialStateList);

  return (
    <div className="">
      <Table state={state} dispatch={dispatch} />
      {state.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}
