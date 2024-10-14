"use client";

import { useCallback, useReducer } from "react";

import { ItemReducer, ItemState } from "./_types/type";

import { Info } from "@/components/Alert/Alert";
import HeaderRow from "./_components/header-row";
import BodyRow from "./_components/body-row";
import AddRow from "./_components/add-row";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  const [state, dispatch] = useReducer(ItemReducer, []);

  const AddItem = useCallback(
    (item: ItemState) => {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          item: item,
        },
      });
    },
    [dispatch],
  );

  const EditItem = useCallback(
    (item: ItemState) => {
      dispatch({
        type: "EDIT_ITEM",
        payload: {
          item: item,
        },
      });
    },
    [dispatch],
  );

  const DeleteItem = useCallback(
    (id: string) => {
      dispatch({
        type: "DELETE_ITEM",
        payload: {
          id: id,
        },
      });
    },
    [dispatch],
  );

  return (
    <div className="space-y-5 p-5">
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>PUBLIC_KEY = {key}</h2>
      <table className="w-full table-fixed border border-gray-400">
        <HeaderRow />
        <tbody>
          {state.map((item) => (
            <BodyRow
              key={item.id}
              item={item}
              EditItem={EditItem}
              DeleteItem={DeleteItem}
            />
          ))}
        </tbody>
        <tfoot className="bg-gray-800 text-white">
          <AddRow AddItem={AddItem} />
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
