import React, { useState, FormEvent } from "react";

import { ErrorState, ItemState } from "../../_types/type";
import {
  TextInput,
  DropDown,
  NumberCurrencyDropDown,
  DateTimeInput,
} from "@/components/ui";

interface EditRowProps {
  AddItem?: (item: ItemState) => void;
  EditItem?: (item: ItemState) => void;
  DeleteItem?: (id: string) => void;
  item?: ItemState;
}

const EditRow: React.FC<EditRowProps> = (props) => {
  const initialItemState: ItemState = props.item
    ? props.item
    : {
        id: "ADD",
        title: "",
        member_id: "MEMBER_ID",
        currency_id: "jp",
        amount: 0,
        datetime: new Date(),
      };

  const initialErrorState: ErrorState = {
    titleError: false,
    memberError: false,
    currencyError: false,
    amountError: false,
    datetimeError: false,
  };

  const [state, setState] = useState(initialItemState);
  const [errors, setErrors] = useState(initialErrorState);

  const handleError = () => {
    const errors: ErrorState = {
      titleError: !state.title,
      memberError: !state.member_id,
      currencyError: !state.currency_id,
      amountError: !state.amount,
      datetimeError: !state.datetime,
    };

    // エラーを更新
    setErrors(errors);

    // エラーがあったかどうかを返す
    return Object.values(errors).some((error) => error);
  };

  // フォームをリセット
  const handleReset = () => {
    setState(initialItemState);
    setErrors(initialErrorState);
  };

  // アイテムを追加
  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    // エラーがある場合は処理を中断
    if (handleError()) return;

    // Dispatch
    props.AddItem?.(state);
    handleReset(); // フォームをリセット
  };

  // アイテムを編集
  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    // エラーがある場合は処理を中断
    if (handleError()) return;

    // Dispatch
    props.EditItem?.(state);
  };

  // アイテムを削除
  const handleDelete = () => {
    props.DeleteItem?.(state.id ? state.id : "ERROR"); // IDがない場合は-1を返す
  };

  return (
    <>
      <tr className="bg-gray-400">
        <th></th>
        <th className="p-2">
          <TextInput
            id="title-input"
            error={errors.titleError}
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            required={true}
          />
        </th>
        <th className="p-2">
          <DropDown
            id="member-select"
            error={errors.memberError}
            value={state.member_id}
            onChange={(e) => setState({ ...state, member_id: e.target.value })}
            required={true}
            items={[
              { key: "0", value: "Choose a member" },
              { key: "1", value: "Member 1" },
              { key: "2", value: "Member 2" },
              { key: "3", value: "Member 3" },
            ]}
          />
        </th>
        <th className="p-2"></th>
        <th className="p-2">
          <NumberCurrencyDropDown
            numbererror={errors.amountError}
            numbervalue={state.amount}
            numberonChange={(e) =>
              setState({ ...state, amount: parseInt(e.target.value) })
            }
            currencyerror={errors.currencyError}
            currencyvalue={state.currency_id}
            currencyonChange={(e) =>
              setState({ ...state, currency_id: e.target.value })
            }
            currencies={[
              { key: "jp", value: "JPY" },
              { key: "us", value: "USD" },
            ]}
          />
        </th>
        <th className="p-2">
          <DateTimeInput
            error={errors.datetimeError}
            value={state.datetime}
            onChange={(e) =>
              setState({ ...state, datetime: new Date(e.target.value) })
            }
            required={true}
          />
        </th>
        <th></th>
      </tr>
      <tr className="bg-gray-400">
        <th></th>
        <th colSpan={5}>
          <div className="flex justify-end p-2">
            {props.DeleteItem && (
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
            {props.EditItem && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={(e) => handleEdit(e)}
              >
                Edit
              </button>
            )}
            {props.AddItem && (
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
