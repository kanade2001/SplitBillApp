export interface ItemState {
  id: string;
  data: DataState;
}

export interface DataState {
  label: string;
}

export interface PaymentState extends DataState {
  member_id: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}



export type ItemAction =
  | { type: "GET" }
  | { type: "POST_ITEM"; payload: { data: DataState } }
  | { type: "PATCH_ITEM"; payload: { id: string; data: DataState } }
  | { type: "DELETE_ITEM"; payload: { id: string } };

export const ItemReducer = (state: ItemState[], action: ItemAction) => {
  switch (action.type) {
    // 取得
    case "GET":
      // TODO サーバー処理
      state = [];
      return state;
    // 追加
    case "POST_ITEM":
      // TODO サーバー処理
      return [...state, { id: "ID", data: action.payload.data }];
    // 編集
    case "PATCH_ITEM":
      // TODO サーバー処理
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: action.payload.id, data: action.payload.data }
          : item,
      );
    // 削除
    case "DELETE_ITEM":
      // TODO サーバー処理
      return state.filter((item) => item.id !== action.payload.id);
  }
};

export interface ErrorState {
  titleError: boolean;
  memberError: boolean;
  currencyError: boolean;
  amountError: boolean;
  datetimeError: boolean;
}
