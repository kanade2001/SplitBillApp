export interface PaymentState {
  id: string;
  data: PaymentDataState;
}

export interface PaymentDataState {
  label: string;
  member_id: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

export type PaymentAction =
  | { type: "FETCH" }
  | { type: "ADD"; payload: { data: PaymentDataState } }
  | { type: "PATCH"; payload: { id: string; data: PaymentDataState } }
  | { type: "DELETE"; payload: { id: string } };

export const PaymentReducer = (state: PaymentState[], action: PaymentAction) => {
  switch (action.type) {
    // 取得
    case "FETCH":
      // TODO サーバー処理
      state = [];
      return state;
    // 追加
    case "ADD":
      // TODO サーバー処理
      return [...state, { id: "ID", data: action.payload.data }];
    // 編集
    case "PATCH":
      // TODO サーバー処理
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: action.payload.id, data: action.payload.data }
          : item,
      );
    // 削除
    case "DELETE":
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
