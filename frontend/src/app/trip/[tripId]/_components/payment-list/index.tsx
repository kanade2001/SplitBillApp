"use client";

import { Key, useReducer, useState } from "react";

import { Info } from "@/components/Alert/Alert";
import Table from "@/components/ui/table";
import "/node_modules/flag-icons/css/flag-icons.min.css";

interface ItemState {
  id: Key;
  title: string;
  member: string;
  member_id: bigint;
  currency: string;
  currency_id: string;
  amount: bigint;
  datetime: Date;
}

type ItemAction =
  | { type: "ADD_ITEM"; payload: { item: ItemState } }
  | { type: "EDIT_ITEM"; payload: { item: ItemState } }
  | { type: "DELETE_ITEM"; payload: { id: Key } };

const initialStateList: ItemState[] = [];

const ItemReducer = (state: ItemState[], action: ItemAction) => {
  switch (action.type) {
    // 追加
    case "ADD_ITEM":
      console.log("ADD_ITEM");
      return [...state, action.payload.item];
    // 編集
    case "EDIT_ITEM":
      console.log("EDIT_ITEM");
      return state.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, ...action.payload.item }
          : item,
      );
    // 削除
    case "DELETE_ITEM":
      console.log("DELETE_ITEM");
      return state.filter((item) => item.id !== action.payload.id);
  }
};

export default function PaymentList({ items }: { items: string[] }) {
  const [state, dispatch] = useReducer(ItemReducer, initialStateList);

  return (
    <div className="">
      <Table />

      {items.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}
