import React, { useReducer, FormEvent } from "react";

import { ItemAction, FormState, ErrorState } from "../../_types/type";

interface EditRowProps {
  visible: {
    add: boolean;
    edit: boolean;
    delete: boolean;
  };
  dispatch: React.Dispatch<ItemAction>;
}

type FormAction =
  | {
      type: "FORM_UPDATE";
      payload: {
        field: keyof FormState;
        value: string | number | Date;
      };
    }
  | { type: "FORM_RESET" };

type ErrorAction =
  | { type: "ERROR_RESET" }
  | {
      type: "ERROR_CHECK";
      payload: {
        titleError: boolean;
        memberError: boolean;
        currencyError: boolean;
        amountError: boolean;
        datetimeError: boolean;
      };
    };

const initialItemState: FormState = {
  title: "",
  member: "",
  currency: "",
  amount: 0,
  datetime: new Date().toISOString(),
};

const initialErrorState: ErrorState = {
  titleError: false,
  memberError: false,
  currencyError: false,
  amountError: false,
  datetimeError: false,
};

const ItemReducer: React.Reducer<FormState, FormAction> = (
  state: FormState,
  action: FormAction,
) => {
  switch (action.type) {
    case "FORM_UPDATE":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "FORM_RESET":
      return initialItemState;
    default:
      return state;
  }
};

const ErrorReducer: React.Reducer<ErrorState, ErrorAction> = (
  state: ErrorState,
  action: ErrorAction,
) => {
  switch (action.type) {
    case "ERROR_CHECK":
      return {
        ...state,
        titleError: action.payload.titleError,
        memberError: action.payload.memberError,
        currencyError: action.payload.currencyError,
        amountError: action.payload.amountError,
        datetimeError: action.payload.datetimeError,
      };
    case "ERROR_RESET":
      return initialErrorState;
    default:
      return state;
  }
};

const EditRow: React.FC<EditRowProps> = ({ visible, dispatch }) => {
  const [state, dispatchItem] = useReducer(ItemReducer, initialItemState);
  const [error, dispatchError] = useReducer(ErrorReducer, initialErrorState);

  const handleAdd = (e: FormEvent) => {
    console.log("handleAdd");
    e.preventDefault();
    let hasError = false;
    const errors = {
      titleError: false,
      memberError: false,
      currencyError: false,
      amountError: false,
      datetimeError: false,
    };

    // フォームに空欄がある場合はエラーを追加
    if (!state.title) {
      errors.titleError = true;
      hasError = true;
    }
    if (!state.member) {
      errors.memberError = true;
      hasError = true;
    }
    if (!state.currency) {
      errors.currencyError = true;
      hasError = true;
    }
    if (!state.amount) {
      errors.amountError = true;
      hasError = true;
    }
    if (!state.datetime) {
      errors.datetimeError = true;
      hasError = true;
    }

    // エラーを更新
    dispatchError({ type: "ERROR_CHECK", payload: errors });

    // エラーがある場合は処理を中断
    if (hasError) return;

    // TODO サーバー処理
    // 親コンポーネントへアイテムを追加
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: {
          id: BigInt(0), // TODO サーバーから返却されるID
          title: state.title,
          member: state.member,
          member_id: BigInt(0),
          currency: state.currency,
          currency_id: "jp",
          amount: state.amount,
          datetime: new Date(state.datetime),
        },
      },
    });
    handleReset(); // フォームをリセット
  };

  const handleReset = () => {
    dispatchItem({ type: "FORM_RESET" });
    dispatchError({ type: "ERROR_RESET" });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_ITEM", payload: { id: BigInt(0) } });
  };

  return (
    <>
      {" "}
      <tr className="bg-gray-400">
        <th></th>
        <th className="p-2">
          <input
            type="text"
            id="title"
            className={[
              "w-full rounded-md border px-2 text-sm text-gray-900",
              error["titleError"]
                ? "border-red-600 bg-red-200"
                : "border-gray-600 bg-white",
            ].join(" ")}
            value={state.title}
            onChange={(e) =>
              dispatchItem({
                type: "FORM_UPDATE",
                payload: { field: "title", value: e.target.value },
              })
            }
          />
        </th>
        <th className="p-2">
          <select
            id="member"
            className={[
              "block w-full rounded-md border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
              error["memberError"]
                ? "border-red-600 bg-red-200"
                : "border-gray-600 bg-white",
            ].join(" ")}
            value={state.member}
            onChange={(e) =>
              dispatchItem({
                type: "FORM_UPDATE",
                payload: { field: "member", value: e.target.value },
              })
            }
          >
            <option value="">Choose a member</option>
            <option value="1">Kanade</option>
            <option value="2">Tomoka</option>
            <option value="3">Sayu</option>
            <option value="4">Ao</option>
          </select>
        </th>
        <th className="p-2">
          <input
            type="text"
            id="currency"
            className={[
              "w-full rounded-md border px-2 text-sm text-gray-900",
              error["currencyError"]
                ? "border-red-600 bg-red-200"
                : "border-gray-600 bg-white",
            ].join(" ")}
            value={state.currency}
            onChange={(e) =>
              dispatchItem({
                type: "FORM_UPDATE",
                payload: { field: "currency", value: e.target.value },
              })
            }
          />
        </th>
        <th className="p-2">
          <input
            type="number"
            id="amount"
            className={[
              "w-full rounded-md border px-2 text-sm text-gray-900",
              error["amountError"]
                ? "border-red-600 bg-red-200"
                : "border-gray-600 bg-white",
            ].join(" ")}
            value={state.amount}
            onChange={(e) =>
              dispatchItem({
                type: "FORM_UPDATE",
                payload: { field: "amount", value: e.target.value },
              })
            }
          />
        </th>
        <th className="p-2">
          <input
            type="datetime-local"
            id="datetime"
            className={[
              "w-full rounded-md border px-2 text-sm text-gray-900",
              error["datetimeError"]
                ? "border-red-600 bg-red-200"
                : "border-gray-600 bg-white",
            ].join(" ")}
            value={state.datetime}
            onChange={(e) =>
              dispatchItem({
                type: "FORM_UPDATE",
                payload: { field: "datetime", value: e.target.value },
              })
            }
          />
        </th>
        <th></th>
      </tr>
      <tr className="bg-gray-400">
        <th></th>
        <th colSpan={5}>
          <div className="flex justify-end p-2">
            {visible.delete && (
              <button
                className="x-20 ms-2 rounded-md bg-red-800 px-2 text-center text-sm text-white"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            )}
            <button
              className="x-20 ms-2 rounded-md bg-gray-800 px-2 text-center text-sm text-white"
              onClick={() => handleReset()}
            >
              Reset
            </button>{" "}
            {visible.edit && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={(e) => handleAdd(e)}
              >
                Edit
              </button>
            )}
            {visible.add && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={(e) => handleAdd(e)}
              >
                Add
              </button>
            )}
          </div>
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default EditRow;
