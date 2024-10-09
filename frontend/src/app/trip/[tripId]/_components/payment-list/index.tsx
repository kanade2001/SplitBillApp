"use client";

import { Key, useReducer, useState } from "react";

import { Info } from "@/components/Alert/Alert";
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
      <table className="w-full table-fixed border border-gray-400">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="w-10 border border-r-0 border-gray-400 p-2">
              <svg
                className="h-6 w-6 text-gray-800 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  width="12"
                  height="12"
                  x="6"
                  y="6"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  rx="1"
                />
              </svg>
            </th>
            <th className="border border-l-0 border-double border-gray-400 p-2">
              Title
            </th>
            <th className="border border-gray-400 p-2">Memeber</th>
            <th className="w-28 border border-gray-400 p-2">Currency</th>
            <th className="border border-gray-400 p-2">Amount</th>
            <th className="border border-gray-400 p-2">Date/Time</th>
            <th className="w-16 border border-gray-400 p-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-r-0 border-gray-400"></td>
              <td className="border border-l-0 border-gray-400 p-2">{item}</td>
              <td className="border border-gray-400 p-2">Kanade</td>
              <td className="border border-gray-400 p-2 text-center">
                <div className="flex justify-between">
                  <div>
                    <span className="fi fi-jp"></span>
                  </div>
                  <div className="flex-grow">JPY</div>
                </div>
              </td>
              <td className="border border-gray-400 p-2 text-right">2000</td>
              <td className="border border-gray-400 p-2">{item}</td>
              <td className="border border-gray-400">
                <svg
                  className="h-6 w-full text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <AddRow />
        </tfoot>
      </table>

      {items.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}

const AddRow = () => {
  const [isVisibleAdd, setIsVisibleAdd] = useState<boolean>(false);
  const handleIsVisibleAdd = () => {
    setIsVisibleAdd(!isVisibleAdd);
  };

  return (
    <>
      <tr>
        <th className="border border-r-0 border-gray-400 bg-gray-800">
          <svg
            className="h-6 w-full text-gray-800 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </th>
        <th
          colSpan={6}
          className="border border-l-0 border-gray-400 bg-gray-800 text-white"
        >
          <button
            className="h-full w-full p-2 text-left"
            onClick={() => handleIsVisibleAdd()}
          >
            Add
          </button>
        </th>
      </tr>
      {isVisibleAdd && (
        <>
          <tr className="bg-gray-400">
            <th></th>
            <th className="p-2">
              <input
                type="text"
                id="member"
                className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                id="member"
                className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
              />
            </th>
            <th className="p-2">
              <input
                type="text"
                id="currency"
                className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
                placeholder="JPY"
              />
            </th>
            <th className="p-2">
              <input
                type="number"
                id="amount"
                className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
                placeholder="0"
              />
            </th>
            <th className="p-2">
              <input
                type="datetime-local"
                id="datetime"
                className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
                placeholder={new Date().toISOString()}
              />
            </th>
            <th></th>
          </tr>
          <tr className="bg-gray-400">
            <th></th>
            <th colSpan={5} className="px-2 pb-2">
              <div className="flex justify-end">
                <button className="x-20 ms-2 rounded-md bg-gray-800 px-2 text-center text-sm text-white">
                  Reset
                </button>
                <button className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white">
                  Complete
                </button>
              </div>
            </th>
            <th></th>
          </tr>
        </>
      )}
    </>
  );
};
