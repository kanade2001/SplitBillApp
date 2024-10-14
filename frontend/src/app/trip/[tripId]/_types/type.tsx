export interface ItemState {
  id: string;
  data: DataState;
}

export interface DataState {
  title: string;
  member_id: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

export interface CurrencyState {
  id: string;
  data: CurrencyDataState;
}

export interface CurrencyDataState {
  name: string;
}

export interface MemberState {
  id: string;
  data: MemberDataState;
}

export interface MemberDataState {
  name: string;
}

export type ItemAction =
  | { type: "GET" }
  | {
      type: "POST_ITEM";
      payload: { data: DataState | CurrencyDataState | MemberDataState };
    }
  | {
      type: "PATCH_ITEM";
      payload: {
        id: string;
        data: DataState | CurrencyDataState | MemberDataState;
      };
    }
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
