import { useReducer } from "react";

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

interface EditRowItem {
  id: keyof ItemState;
  type?: string;
  initialValue?: string;
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

  /*const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CHECK_ERROR" });
    // TODO サーバー処理
    // TODO 親コンポーネントへアイテムを追加
  };
  */

  if (
    state.titleError ||
    state.memberError ||
    state.currencyError ||
    state.amountError ||
    state.datetimeError
  ) {
    console.log("Error");
  }

  const items: EditRowItem[] = [
    {
      id: "title",
    },
    {
      id: "member",
    },
    {
      id: "currency",
    },
    {
      id: "amount",
      type: "number",
    },
    {
      id: "datetime",
      type: "datetime-local",
    },
  ];

  return (
    <>
      <tr className="bg-gray-400">
        <th></th>
        {items.map(({ id, type = "text", initialValue = "" }) => (
          <th key={id} className="p-2">
            <input
              type={type}
              id={id}
              className="w-full rounded-md border border-gray-600 bg-white px-2 text-sm text-gray-900"
              value={initialValue}
              onChange={(e) =>
                dispatch({
                  type: "FORM_UPDATE",
                  payload: { field: id, value: e.target.value },
                })
              }
            />
          </th>
        ))}
        <th></th>
      </tr>
    </>
  );
};

export default EditRow;
