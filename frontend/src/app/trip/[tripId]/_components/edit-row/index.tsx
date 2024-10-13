import React, { useState, FormEvent } from "react";

import { ItemAction, FormState, ErrorState } from "../../_types/type";
import {
  TextInput,
  DropDown,
  NumberCurrencyDropDown,
  DateTimeInput,
} from "@/components/ui";

interface EditRowProps {
  visible: {
    add: boolean;
    edit: boolean;
    delete: boolean;
  };
  dispatch: React.Dispatch<ItemAction>;
  id?: string;
  item?: FormState;
}

const EditRow: React.FC<EditRowProps> = (props) => {
  const initialItemState: FormState = props.item
    ? props.item
    : {
        title: "",
        memberid: 0,
        currencyid: "jp",
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
      memberError: !state.memberid,
      currencyError: !state.currencyid,
      amountError: !state.amount,
      datetimeError: !state.datetime,
    };

    // エラーを更新
    setErrors(errors);

    // エラーがあったかどうかを返す
    return Object.values(errors).some((error) => error);
  };

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();

    // エラーがある場合は処理を中断
    if (handleError()) return;

    // TODO サーバー処理
    // 親コンポーネントへアイテムを追加
    props.dispatch({
      type: "ADD_ITEM",
      payload: {
        item: {
          id: BigInt(0), // TODO サーバーから返却されるID
          title: state.title,
          member: "Member 1",
          member_id: BigInt(0),
          currency: "JPY",
          currency_id: state.currencyid,
          amount: state.amount,
          datetime: new Date(state.datetime),
        },
      },
    });
    handleReset(); // フォームをリセット
  };

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    // エラーがある場合は処理を中断
    if (handleError()) return;

    // TODO サーバー処理
    // 親コンポーネントへアイテムを編集
    props.dispatch({
      type: "EDIT_ITEM",
      payload: {
        item: {
          id: BigInt(0), // TODO サーバーから返却されるID
          title: state.title,
          member: "Member 1",
          member_id: BigInt(0),
          currency: "JPY",
          currency_id: state.currencyid,
          amount: state.amount,
          datetime: new Date(state.datetime),
        },
      },
    });
  };

  const handleReset = () => {
    setState(initialItemState);
    setErrors(initialErrorState);
  };

  const handleDelete = () => {
    props.dispatch({ type: "DELETE_ITEM", payload: { id: BigInt(0) } });
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
            value={state.memberid}
            onChange={(e) =>
              setState({ ...state, memberid: parseInt(e.target.value) })
            }
            required={true}
            items={[
              { key: 0, value: "Choose a member" },
              { key: 1, value: "Member 1" },
              { key: 2, value: "Member 2" },
              { key: 3, value: "Member 3" },
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
            currencyvalue={state.currencyid}
            currencyonChange={(e) =>
              setState({ ...state, currencyid: e.target.value })
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
            {props.visible.delete && (
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
            {props.visible.edit && (
              <button
                className="x-20 ms-2 rounded-md bg-blue-800 px-2 text-center text-sm text-white"
                onClick={(e) => handleEdit(e)}
              >
                Edit
              </button>
            )}
            {props.visible.add && (
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
