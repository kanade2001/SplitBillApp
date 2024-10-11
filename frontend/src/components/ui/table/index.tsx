"use client";

import { Key } from "react";

import React from "react";

import HeaderRow from "./_components/header-row";
import BodyRow from "./_components/body-row";
import AddRow from "./_components/add-row";

interface ItemState {
  id: Key;
  title: string;
  member: string;
  member_id: bigint;
  currency: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

type ItemAction =
  | { type: "ADD_ITEM"; payload: { item: ItemState } }
  | { type: "EDIT_ITEM"; payload: { item: ItemState } }
  | { type: "DELETE_ITEM"; payload: { id: Key } };

interface TableProps {
  state: ItemState[];
  dispatch: React.Dispatch<ItemAction>;
}

const Table: React.FC<TableProps> = ({ state, dispatch }) => {
  return (
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
  );
};

export default Table;
