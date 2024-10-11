import { Key } from "react";

export interface ItemState {
  id: Key;
  title: string;
  member: string;
  member_id: bigint;
  currency: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

export const initialStateList: ItemState[] = [];

export type ItemAction =
  | { type: "ADD_ITEM"; payload: { item: ItemState } }
  | { type: "EDIT_ITEM"; payload: { item: ItemState } }
  | { type: "DELETE_ITEM"; payload: { id: Key } };

export const ItemReducer = (state: ItemState[], action: ItemAction) => {
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

export interface FormState {
  title: string;
  member: string;
  currency: string;
  // TODO セントとかの扱い
  amount: number;
  datetime: string;
}

export interface ErrorState {
  titleError: boolean;
  memberError: boolean;
  currencyError: boolean;
  amountError: boolean;
  datetimeError: boolean;
}