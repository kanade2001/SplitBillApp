import { FormEvent, useReducer } from "react";

interface ItemState {
  title: string;
  member: string;
  currency: string;
  // TODO セントとかの扱い
  amount: bigint;
  datetime: Date;

  titleError: boolean;
  memberError: boolean;
  currencyError: boolean;
  amountError: boolean;
  datetimeError: boolean;
}

type ItemAction =
  | {
      type: "FORM_UPDATE";
      payload: {
        field: keyof ItemState;
        value: string | bigint | Date;
      };
    }
  | { type: "FORM_RESET" }
  | { type: "CHECK_ERROR" };

const initialState: ItemState = {
  title: "",
  member: "",
  currency: "",
  amount: BigInt(0),
  datetime: new Date(),

  titleError: false,
  memberError: false,
  currencyError: false,
  amountError: false,
  datetimeError: false,
};

const ItemReducer: React.Reducer<ItemState, ItemAction> = (
  state: ItemState,
  action: ItemAction,
) => {
  switch (action.type) {
    case "FORM_UPDATE":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "FORM_RESET":
      return initialState;
    case "CHECK_ERROR":
      return {
        ...state,
        titleError: !state.title,
        memberError: !state.member,
        currencyError: !state.currency,
        amountError: !state.amount && isNaN(Number(state.amount)),
        datetimeError: !state.datetime && isNaN(Date.parse(state.datetime)),
      };
    default:
      return state;
  }
};

const EditRow: React.FC = () => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CHECK_ERROR" });
    // TODO サーバー処理
    // TODO 親コンポーネントへアイテムを追加
  };

  return (
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
  );
};

export default EditRow;
