"use client";

import { useCallback, useState, useReducer } from "react";

import { PaymentReducer, PaymentDataState, ConfigState } from "./_types/type";

import { Info } from "@/components/Alert/Alert";
import HeaderRow from "./_components/header-row";
import BodyRow from "./_components/body-row";
import AddRow from "./_components/add-row";
import MemberList from "./_components/member-list";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { EditTable } from "@/components/table";
import { MemberFormProps } from "@/store/types/form";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined; tab: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  const [state, dispatch] = useReducer(PaymentReducer, []); // ItemState[]
  const [config, setConfig] = useState<ConfigState>({
    label: "title",
    members: [
      { id: "1", data: { label: "Member1" } },
      { id: "2", data: { label: "Member2" } },
    ],
    currencies: [
      { id: "jp", label: "JPY" },
      { id: "us", label: "USD" },
    ],
  });
  const [configDraft, setConfigDraft] = useState<ConfigState>({
    label: "title",
    members: [],
    currencies: [],
  });

  const AddItem = useCallback(
    (data: PaymentDataState) => {
      dispatch({
        type: "ADD",
        payload: {
          data: data,
        },
      });
    },
    [dispatch],
  );

  const EditItem = useCallback(
    (id: string, data: PaymentDataState) => {
      dispatch({
        type: "PATCH",
        payload: {
          id: id,
          data: data,
        },
      });
    },
    [dispatch],
  );

  const DeleteItem = useCallback(
    (id: string) => {
      dispatch({
        type: "DELETE",
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
      <h2>TAB = {searchParams.tab}</h2>
      <table className="w-full table-fixed border border-gray-400">
        <HeaderRow />
        <tbody>
          {state.map((item) => (
            <BodyRow
              key={item.id}
              id={item.id}
              data={item.data as PaymentDataState}
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

      <h2>Config</h2>
      {config.members.map((member) => (
        <div key={member.id}>{member.data.label}</div>
      ))}
      <button onClick={() => setConfig(configDraft)}>Set Config</button>
      <button
        onClick={() =>
          setConfigDraft({
            label: "title",
            members: [],
            currencies: [],
          })
        }
      >
        Set Config Draft
      </button>

      <MemberList id={params.tripId} />

      <p>NEW TABLE COMPONENT</p>
      <EditTable formProps={MemberFormProps} />
    </div>
  );
}
